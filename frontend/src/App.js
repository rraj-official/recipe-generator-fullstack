import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Login from "./pages/Login";
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import Survey from './pages/Survey';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Register', href: '/register', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Profile', href: '/userprofile', current: false },
]

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  // Toggles between user logged in and user logged out
  const loginUser = () => {
    setLoggedIn(!(LoggedIn));
    console.log("Login Status:" + LoggedIn);
  }

  // Holds a ID value if user is logged in:
  const [LoggedInId, setLoggedInId] = useState(0);
  // Sets the ID after fetching it
  const setId = (id) => {
    setLoggedInId(id);
  }

  // Holds state of selected item index [0,1,2,3] on navbar
  const [itemIndex, setItemIndex] = useState(0);
  const handleItemIndex = (i) => {
    setItemIndex(i);
  }
  return (
    <div className="App">
      <Router>
        <Navbar loginUser={loginUser} itemIndex={itemIndex} />
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login loginUser={loginUser} loginStatus={LoggedIn} loggedInId={LoggedInId} setId={setId}/>} />
          <Route path='/register' element={< Register loginUser={loginUser} setId={setId} handleItemIndex={handleItemIndex}/>} />
          {/* <Route path='/blogs' element={<Blogs />} />
          <Route path='/sign-up' element={<SignUp />} /> */}
          <Route path='/userprofile' element={<UserProfile loginStatus={LoggedIn} loggedInId={LoggedInId}/>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Survey loginStatus={LoggedIn}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
