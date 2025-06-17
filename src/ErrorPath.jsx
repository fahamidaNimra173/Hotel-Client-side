import React from 'react';

import { useNavigate } from 'react-router';
const ErrorPath = () => {
    const navigate=useNavigate();
    const handleNvigate=()=>{
        navigate('/')

    }
    return (
        <div>
          
            <div className='bg-blue-50 md:pt-12 pt-7 px-2 flex flex-col items-center'>
            <img src="https://i.ibb.co.com/hFkrBKnX/3828541.jpg" className='md:h-[300px] md:w-[400px] rounded-2xl mx-auto  md:mt-16 px-2 ' alt="" />
            <h1 className=' text-blue-500 text-shadow-2xl text-shadow-blue-900 text-center mt-20  text-4xl font-bold'>404-Page Not Found</h1>
            <p className='text-[19px] text-cyan-700 font-medium text-center pb-10 mt-4  '>OOps! The Page you're looking for doesn't exist</p>
            <button onClick={handleNvigate} className='  btn bg-blue-500 text-white text-2xl md:mb-96 px-7 py-4 rounded-xl mb-12  '>Go Back To Home</button>
            </div>
            
        </div>
    );
};

export default ErrorPath;