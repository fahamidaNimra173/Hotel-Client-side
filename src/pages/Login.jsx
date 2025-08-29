import React, { use, useRef} from 'react';

import '../App.css'
import { NavLink,  useLocation, useNavigate } from 'react-router';


import {  GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';

import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { auth } from '../Firebase.init';
import { AuthContext } from '../AuthContext';

const Login = () => {
    const emailref=useRef()
    const navigate=useNavigate()
    const location =useLocation()
    const from=location.state?.from ||'/'
        const{signInUser}=use(AuthContext)
        // const[errors,setErrors]=useState([])
        const handleLogIn=e=>{
            e.preventDefault()
            const email=e.target.email.value;
            const password=e.target.password.value;
            console.log(email,password)
            signInUser(email,password).then((result)=>{
                console.log(result.user)
                 toast('Logged in succesfully!');
                 navigate(from,{replace:true})
                
            }).catch((error)=>{
                console.log(error)
                     Swal.fire({    
                                    icon: "error",
                                    title: "Oops...",
                                    text:'Please give valid email and password!',
                                    
                                    draggable: true
                                        });
                //  setErrors(error.message)

                return ;
            })
           
            
        }


        const provider = new GoogleAuthProvider();
        
        
        const handleLoginByGoogle=e=>{
        e.preventDefault();
   
        console.log('before google signin')
        signInWithPopup(auth, provider).then((result)=>{
            console.log('before google signin')
        console.log(result.user)
        toast('Logged in succesfully!');
        navigate(from,{replace:true})
     
        }).catch((error)=>
        console.log(error)
        
        )
        navigate(location?.state||'/')
    }
    const handleForget=e=>{
        e.preventDefault()
        sendPasswordResetEmail(auth,emailref.current.value).then(()=>{
            toast('Check email for password reset')
        }).catch((error)=>{
            console.log(error)
        })

    }
    return (
        <div id='login' className='md:py-80 py-11 lg:px-40 md:px-28 px-3 '>
             {/* <Helmet>
            <title>Verdura | Login</title>
          </Helmet> */}

                <div className='md:grid flex shadow-2xl shadow-gray-400 flex-col-reverse gap-6 md:grid-cols-2 bg-black p-1.5  rounded-2xl'>
                    <div >
                        <img className='mt-3.5' src="https://i.ibb.co/b51NVSYh/freepik-the-style-is-candid-image-photography-with-natural-56144.jpg" alt="" />
                        <img className='lg:hidden md:block hidden' src="https://i.ibb.co/sYQpgs0/Screenshot-2025-05-21-191254.pngs" alt="" />
                        
                    </div>
                <form onSubmit={handleLogIn}  autoComplete="off" className="text-center pt-6 md:pt-15 text-white font-medium text-[18px]  shadow-[#bad682] rounded-b-lg rounded-t-md shadow-2xl   bg-linear-to-b  from-[#fdf7c4] to-[#bad682] opacity-100 border-base-300 w-full mx-auto  -z-0   p-4">
                <legend className=" text-center text-amber-500 text-shadow-2xs text-shadow-black text-3xl eczar">Login & Go Green</legend>

                <label className="label text-[22px] mt-16 text-amber-500 text-shadow-2xs text-shadow-black mb-2.5 ">Email</label><br/>
                <input type="email" name='email' className="border-b-2 text-black  border-b-blue-500 mb-2" ref={emailref}  autoComplete="off" placeholder="Email" required /><br/>

                <label className="label text-amber-500 text-shadow-2xs text-shadow-black mb-2.5  ">Password</label><br/>
                <input type="password" className="border-b-2 text-black  border-b-blue-500 mb-2" name='password' autoComplete="new-password" placeholder="Password" required  /><br/>
                <div onClick={handleForget} >
                    <a  className='text-white text-[19px] underline'>Forget Your Password?</a>
                    </div>

                
                {/* <p className='text-red-500 text-[19px] p-6'>{errors}</p> */}
                
                <button className="btn  text-white chicle font-bold bg-amber-500 text-[20px] -tracking-tighter shadow-2xs mt-4 mb-4">Login</button><br/>
                <button id='btn-sign' className="btn text-wrap text-shadow-2xs text-shadow-gray-700 shadow-2xl  bg-amber-500 mb-13 text-white chicle font-bold text-[20px] -tracking-tighter  " onClick={handleLoginByGoogle} ><img className='w-6 bg-yellow-50 rounded-full' src="https://i.ibb.co.com/0yympJ9z/pngwing-com.png" alt="" />Log In With Google</button>
                <p className='overpass p-5 text-white'>Don't Have Any Account? <NavLink to='/register' className='text-blue-500'>Register</NavLink></p>
                </form>
                
                </div>
                
        </div>
    
    );
};

export default Login;