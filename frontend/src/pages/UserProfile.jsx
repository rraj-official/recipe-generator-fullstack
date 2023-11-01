import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import PleaseLogin from './PleaseLogin';

const UserProfile = (props) => {
    const {loggedInId} =props;
    const {loginStatus} = props;
    console.log("Login Status:"+loginStatus);
    // Concatenating the address:
    const [streetAddress,setStreetAddress] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [pin,setPin] = useState('');
    const [country,setCountry] = useState('');

    // const location = useLocation();

    // Implementing the loginStatus
    // Catch the ID
    // const id = location.state;
    const id = loggedInId;
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const updateUserData = (e) => {
        e.preventDefault();
        const address = `${streetAddress}, ${city}, ${state}, ${pin}, ${country}`;
        Axios
            .put(`http://localhost:3001/update-user/${userData.id}`, {
                username: userData.username,
                password: userData.password,
                first_name: userData.first_name,
                last_name: userData.last_name,
                phone_number: userData.phone_number,
                address: address,
            })
            .then((response) => {
                console.log("User information updated successfully");
                // Need to show success message
            })
            .catch((error) => {
                console.error("Error updating user information", error);
                // Handle error message
            });
    };

// Using ID we fetch user data from sql dbms
    useEffect(() => {
        Axios
            .get("http://localhost:3001/api/users/" + id)
           .then((userDataResponse) => {
                console.log("Data fetched from server");
              // Now we have all the user data
               setUserData(userDataResponse.data);
          })
          .catch((error) => {
             console.error("Error fetching data from server");
               console.error(error);
            });
        }, []);
    return (
        // <div style={{
        //     backgroundImage: "url(/image.jpg)",
        //     filter: "brightness(0.9)"
        // }} className='w-full h-screen bg-cover bg-center flex items-center'>
        //     <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        //         <div className='text-4xl m-3 text-white'>First Name: {userData.first_name}</div>
        //         <div className='text-4xl m-3 text-white'>Last Name: {userData.last_name}</div>
        //         <div className='text-4xl m-3 text-white'>Phone Number: {userData.phone_number}</div>
        //         <div className='text-4xl m-3 text-white'>Address: {userData.address}</div>
        //         <div className='text-4xl m-3 text-white'>Email/Username: {userData.username}</div>
        //         <div className='text-4xl m-3 text-white'>Password: {userData.password}</div>
        //     </div>
        // </div>
        <div>{(id == null || !(loginStatus)) ? (<div><PleaseLogin /></div>) : (
            <form>
                <div className="space-y-12 p-10 px-20 ">
                    <div className="p-10 pb-20 border-b border-gray-900/10">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Edit your profile and click save to update your details.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        value={userData.first_name}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                first_name: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        value={userData.last_name}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                last_name: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        value={userData.username}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                username: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        value={userData.password}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                password: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        value = "India"
                                        onChange={(e) => {
                                            setCountry(e.target.value);
                                        }}
                                    >
                                        <option>India</option>
                                        <option>United States</option>
                                        <option>UK</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => {
                                            setStreetAddress(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e)=>setState(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e)=>setPin(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    About
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>

                            {/* <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Cover photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-6 pb-20">
                    <button className="text-md font-semibold leading-6 text-gray-900" onClick={(e) => {
                        e.preventDefault();
                        navigate('/', { state: userData.id });
                    }}>
                        Cancel
                    </button>
                    <button
                        className="rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={updateUserData}
                    >
                        Save
                    </button>
                </div>
            </form>
        )}

        </div>
    )

}    

export default UserProfile