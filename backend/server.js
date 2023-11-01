const express = require("express");
const mysql = require("mysql2");
// const { Pool } = require("pg");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Trying to use postgresql
// const connectionString = "postgres://default:VXI9UCT6tpSH@ep-plain-tree-29575245.us-east-1.postgres.vercel-storage.com:5432/verceldb"

// const db = new Pool({
//     connectionString: connectionString,
// });

const db = mysql.createConnection({
    user: "node",
    host: "localhost",
    password: "server@123",
    database: "registration_login_db"
});

// Registering a new user

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone_number = req.body.phone_number;
    const address = req.body.address;

    db.query(
        "INSERT INTO users (first_name, last_name, phone_number, address, username, password) VALUES (?,?,?,?,?,?)",
        [first_name, last_name, phone_number, address, username, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error during registration. Please try again.");
            } else {
                // We send the last inserted row's Id back to register
                console.log("Successful reg");
                const userId = result.insertId;
                res.status(200).json({ userId });
            }
        }
    );
});

// Fetching userdata by ID

app.get("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    // Fetching userdata using the Id
    db.query("SELECT * FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while fetching user data from database");
        } else {
            const userData = result[0]; // Assuming the user is found
            res.status(200).json(userData);
        }
    });
});

// Requesting validation of username and password

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query(
        'SELECT * FROM admins WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error during login. Please try again.');
            } else if (result.length == 1) {
                // User credentials are valid
                const userId = result[0].id;
                res.status(200).json({ userId });
                console.log("New login attempt: Login Successful");
            } else {
                // User credentials are invalid
                console.log(result);
                console.log(err);
                res.status(401).send('Invalid email or password');
                console.log("New login attempt: User does not exist in DB");
            }
        }
    );
});

// Fetching the admins table for login validation

app.get("/api/users", (req, res) => {
    // Fetch all users from the 'users' table
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while fetching users data from the database");
        } else {
            res.status(200).json(result);
            console.log("New User Logged in: ")
            console.log(result);
        }
    });
});

// Updating User Data in DB

app.put("/update-user/:id", (req, res) => {
    const userId = req.params.id;
    const {
        username,
        password,
        first_name,
        last_name,
        phone_number,
        address
    } = req.body;
    // Check if the user with the provided ID exists
    db.query("SELECT * FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while checking user data in the database");
        } else if (result.length == 0) {
            res.status(404).send("User not found");
        } else {
            // Update user's information
            db.query(
                "UPDATE users SET username=?, password=?, first_name=?, last_name=?, phone_number=?, address=? WHERE id = ?",
                [username, password, first_name, last_name, phone_number, address, userId],
                (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log(updateErr);
                        res.status(500).send("Error during user information update");
                    } else {
                        console.log("User information updated successfully");
                        res.status(200).send("User information updated successfully");
                    }
                }
            );
        }
    });
});

const port = 3001;

app.listen(port, () => {
    console.log(`Running Server on port ${port}`);
})
