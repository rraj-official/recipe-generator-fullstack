import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const {handleItemIndex}=props;
    const {loginUser} = props;
    const {setId} =props;

    const [fnameReg, setFnameReg] = useState('');
    const [lnameReg, setLnameReg] = useState('');
    const [phoneReg, setPhoneReg] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [addressReg, setAddressReg] = useState('');
    const [passwordRegOld, setPasswordRegOld] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(true);

    const navigate = useNavigate();

    // Check if all fields are valid:
    const validator=()=>{
        if ((passwordReg == passwordRegOld) && (fnameReg != '') && (lnameReg != '') && (phoneReg != '') && (usernameReg != '') && (passwordReg != '') && (passwordRegOld != '') ){
            console.log("Registration details are valid");
            return true;
        }
        else{return false;}
    }
    const register = (e) => {
        e.preventDefault();
        if (validator()==true) {
            Axios.post('http://localhost:3001/register', {
                first_name: fnameReg,
                last_name: lnameReg,
                phone_number: phoneReg,
                address: addressReg,
                username: usernameReg,
                password: passwordReg,
            })
            .then((response) => {
                if (response.status == 200) {
                    // Registration successful, get the user ID
                    const userId = response.data.userId;
                    // This is the user ID of the user in the database
                    console.log("Registration successful: "+userId)
                    // Pass it to userprofile page
                    handleItemIndex(3); // Changing the highlighted value on navbar
                    // Now we can log in the user and set the ID in App.js
                    loginUser();
                    setId(userId);
                    navigate('/userprofile');
                }

            });
        }
        else {
            setPasswordInvalid(true);
        }
    }

    return (
        <>
            <div style={{
                backgroundImage: "url(/image.jpg)",
                filter: "brightness(0.9)"
            }} className='w-full bg-cover bg-center'>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-10 lg:px-8 ">
                    <div>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-20 w-auto"
                                src="https://i.imgur.com/T395W7g.png"
                            />
                            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
                                Join our army of foodies!
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="fname" className="block text-sm font-medium leading-6 text-white">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="fname"
                                            name="fname"
                                            type="fname"
                                            autoComplete="fname"
                                            required
                                            autoFocus
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setFnameReg(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lname" className="block text-sm font-medium leading-6 text-white">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lname"
                                            name="lname"
                                            type="lname"
                                            autoComplete="lname"
                                            required
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setLnameReg(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            autoComplete="phone"
                                            maxLength="10"
                                            required
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setPhoneReg(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email/username" className="block text-sm font-medium leading-6 text-white">
                                        Username/Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email/username"
                                            name="email/username"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setUsernameReg(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>

                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        New Password
                                    </label>


                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setPasswordRegOld(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>

                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        Confirm Password
                                    </label>


                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {
                                                setPasswordReg(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-[#e09758] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e09740] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={register}
                                    >
                                        Register
                                    </button>
                                </div>
                                {passwordInvalid && (
                                    <div className='text-white text-center'>Passwords do not match</div>
                                )}
                            </form>

                            <p className="mt-10 text-center text-sm text-white">
                                Already a member?{' '}
                                <a href="/login" className="font-semibold leading-6 text-[#e09758] hover:text-[#e09740]">
                                    Login Now
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register