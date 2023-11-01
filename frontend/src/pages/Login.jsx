import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const {loginUser} = props;
    const {loginStatus} = props;
    const {setId} =props;
    const {loggedInId} =props;

    console.log(loggedInId);

    console.log("Login Status:"+loginStatus);

    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const [incorrectCredential, setincorrectCredential] = useState(false);

    const login = (e) => {
        e.preventDefault();
        const passKey="SumanDaddyOP";
        if (!(usernameLog == "admin" && passwordLog == "admin123")) {
            // For normal users:
            Axios.post('http://localhost:3001/login', {
                username: usernameLog,
                password: passwordLog,
            })
                .then((response) => {
                    if (response.status == 200) {
                        // Successful login, you can redirect or perform other actions
                        console.log('Logged in successfully!');
                        const userId = response.data.userId;
                        // Now we can log in the user and set the ID in App.js
                        loginUser();
                        setId(userId);
                        console.log(loggedInId);
                        // We have userID of the user
                        console.log(userId);
                        // Now we can navigate to their user profile
                        navigate('/userprofile');
                    } else {
                        // Handle login failure
                        setincorrectCredential(true);
                        console.error('Login failed');
                    }
                })
                .catch((error) => {
                    setincorrectCredential(true);
                    console.error('Error during login:', error);
                });
        }
        // For admin login:
        else{navigate("/admin", { state: passKey })};
    }

    return (
        <>

            <div style={{
                backgroundImage: "url(/image.jpg)",
                filter: "brightness(0.9)"
            }} className='w-full h-screen bg-cover bg-center'>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                    <div>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-20 w-auto"
                                src="https://i.imgur.com/T395W7g.png"
                            />
                            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
                                Welcome Back!
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Username/Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setUsernameLog(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>

                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        Password
                                    </label>


                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setPasswordLog(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-[#e09758] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e09740] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={login}
                                    >
                                        Sign in
                                    </button>
                                </div>
                                {/* Renders only if Login credentials are incorrect */}
                                {incorrectCredential && (
                                    <div className='text-white text-center'>Incorrect Login credentials</div>
                                )}
                            </form>

                            <p className="mt-10 text-center text-sm text-white">
                                New member?{' '}
                                <a href="/register" className="font-semibold leading-6 text-[#e09758] hover:text-[#e09740]">
                                    Register Now
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login