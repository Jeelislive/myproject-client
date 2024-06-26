import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const [ data, setData ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                navigate("/login");
                toast.warn("Please login first to access dashboard");
                return;
            }

            // const axiosConfig = {
            //     headers: {
            //         'Authorization': `Bearer ${ token }`
            //     }
            // };

            // try {
            //     const baseUrl = process.env.NODE_ENV === 'production' ? 'https://myproject-server-ten.vercel.app' : '';
            //     const response = await axios.get(`${ baseUrl }/api/dashboard`, axiosConfig);
            //     setData(response.data);
            // } catch (error) {
            //     toast.error(error.message);
            // }
        };

        fetchData();
    }, [ token, navigate ]);

    return (
        <div className="font-sans text-gray-900 antialiased">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
                <div>
                    <h2 className="font-bold text-3xl">Dashboard</h2>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="py-8">
                        <center>
                            <span className="text-2xl font-semibold">Hello, { "User" }! Welcome from Dashboard</span>
                        </center>
                    </div>

                    <div className="mt-4">
                        <p className="block font-medium text-sm text-gray-700"></p>
                        {/* Adjust this line to display the actual email from your data */ }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
