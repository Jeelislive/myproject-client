import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("auth");
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }, []);

    toast.success("Logout Successful!");

    return (
        <div className='logout-main'>
        </div>
    )
}

export default Logout
