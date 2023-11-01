import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';

const AdminDashboard = () => {
    const [userData, setUserData] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Catch the passkey to make page accessible only through login, not URL
    const passKey = location.state;
    console.log(passKey);

    const details = (userId) => {
        // e.preventDefault();
        navigate('/userprofile', { state: userId });
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/users/")
            .then((userDataResponse) => {
                console.log("Data fetched from server");
                // Now we have all the user data
                setUserData(userDataResponse.data);
                console.log(userDataResponse.data);
                console.log(userData);
            })
            .catch((error) => {
                console.error("Error fetching data from server");
                console.error(error);
            });
    }, []);
    if (passKey == "SumanDaddyOP") {
        return (
            <div className='px-20'>
                {userData == null ? (<p className='mt-7'></p>) : (
                    <div>
                        <div className='px-10 pt-10 pb-10 text-4xl'>Admin Dashboard</div>
                        <div className="relative overflow-x-auto px-10">
                            <table className="w-full text-sm text-left text-[#6b3e17] dark:text-[#6b3e17]">
                                <thead className="text-xs text-white uppercase bg-[#6b3e17] dark:bg-[#6b3e17]] dark:text-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Username
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Password
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {userData.map((user, index) => (
                                        <>
                                            <tr className="bg-white border-b dark:bg-white dark:border-gray-700"></tr>
                                            <th
                                                className="px-6 py-4">
                                                {user.id}
                                            </th><td className="px-6 py-4">{user.first_name + " " + user.last_name}</td><td className="px-6 py-4">{user.username} </td><td className="px-6 py-4">{user.password}</td><td className="px-6 py-4"><button className='font-medium hover:font-semibold' onClick={() => details(user.id)}>Click Here</button></td>

                                        </>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        )
    }
    else {
        return(
            <div>Okay, so you are not admin 😂. Good luck trying to use the URL to get admin access. NOOB!</div>
        )
    }

}

export default AdminDashboard