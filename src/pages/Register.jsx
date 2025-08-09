


import React, {  useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import '../App.css'

import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';

import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../AuthContext';
import { auth } from '../Firebase.init';


const Register = () => {
     const location =useLocation()
    const navigate=useNavigate() 
    const{createUser,loading}=useContext(AuthContext)
    const [success,setSuccess]=useState(false)
    const [errormessage,setErrorMessage]=useState('')
     if(loading){
        return <div className='flex justify-center'><span className="loading max-w-full mx-auto loading-ring loading-xl"></span></div>
        
    }
    const handleSignIn=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        setSuccess(false)
    
        setErrorMessage('')
        if(password.length<6){
            setErrorMessage('your password must have at least 6 character')
            return
           }
          
           if(!/(?=.*[a-z])/.test(password) ){
            setErrorMessage('your password must have small character')
            return
           }
           if(!/(?=.*[A-Z])/.test(password) ){
            setErrorMessage('your password must have capital character')
            return
           }
        createUser(email,password).then((result)=>{
            console.log(result)
            setSuccess(true)
            navigate(location?.state||'/')
             toast('Signed in succesfully!');

             const profile={
            displayName:name,
            photoURL:photo


        }
        updateProfile(auth.currentUser,profile).then((result)=>{
            console.log(result)
            navigate(location?.state||'/')
        }).catch((error)=>{
            console.log(error)
             
        })
        }).catch((error)=>{
            console.log(error)
            setErrorMessage(error.message)
        })
       
    
    }
    
    
            const provider = new GoogleAuthProvider();
            
            
            const handleLoginByGoogle=e=>{
            e.preventDefault();
            
       
    
            signInWithPopup(auth, provider).then((result)=>{
           
             navigate(location?.state||'/')
              toast('Signed in succesfully!');
         
            }).catch((error)=>
            console.log(error)
            )

        
        }
    return (
        <div id='signin' className='md:py-80 py-11 lg:px-40 md:px-28 px-3 z-0 '>

        {/* <Helmet>
            <title>Hotel | Sign Up</title>
        </Helmet> */}
        <form onSubmit={handleSignIn} autoComplete="off" className="text-center pt-6 md:pt-15 text-white font-medium text-[18px]  shadow-purple-700 border rounded-lg rounded-t-md shadow-2xl  bg-linear-to-b from-purple-700 to-purple-50 opacity-100 border-base-300 w-full mx-auto r z-10   p-4">
        <legend className=" text-center mb-5 text-white shadow-2xl py-3 rounded-4xl text-3xl lobster">Register</legend>
        <label className="label mt-5 md:mt-8 text-white mb-2.5 -tracking-tighter text-[20px] text-shadow-2xs text-shadow-gray-700 chicle">Name</label><br/>
        <input type="text" className="input text-gray-700 mb-2 " name='name' autoComplete="off" placeholder="Name" required/><br/>
        <label className="label mt-5 md:mt-8 text-white mb-2.5 -tracking-tighter text-[20px] text-shadow-2xs text-shadow-gray-700 chicle">Email</label><br/>
        <input type="email" name='email' className="input text-gray-700 mb-2" autoComplete="off"  placeholder="Email" required/><br/>
        <label className="label mt-5 md:mt-8 text-white mb-2.5 -tracking-tighter text-[20px] text-shadow-2xs text-shadow-gray-700 chicle">Photo URL</label><br/>
        <input type="text" className="input text-gray-700 mb-2" name='photo' placeholder="Photo" required/><br/>

        <label className="label mt-5 md:mt-8 text-white text-shadow-2xs text-shadow-gray-700 -tracking-tighter text-[20px]  mb-2.5 chicle">Password</label><br/>
        <input type="password" name='password' className="input text-gray-700" autoComplete="new-password" placeholder="Password" required/><br/>
        <p className='overpass p-5 text-black'>Already Have Account? <NavLink to='/login' className='text-blue-500'>Login</NavLink></p>
        {
            success&&<p className='text-green-600'>User has logged in successfully</p>
        }
        {
             errormessage&&<p className="text-red-500">{errormessage}  </p>
    }
       
        <button id='btn-sign' className="btn text-shadow-2xs text-shadow-gray-700 shadow-2xl bg-purple-500 mt-17 mb-7 text-white chicle font-bold text-[20px] -tracking-tighter  ">Register</button><br/>
        <button onClick={handleLoginByGoogle} className="btn text-shadow-2xs text-shadow-gray-700 shadow-2xl  bg-purple-500 mb-17 text-white chicle font-bold text-[20px] -tracking-tighter  " ><img className='w-6 bg-yellow-50 rounded-full' src="https://i.ibb.co.com/0yympJ9z/pngwing-com.png" alt="" /> Register With Google</button>
        </form>
        
        
</div>
    );
};

export default Register;