import React, { useContext, useEffect, useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation for current route
import logo from '../assets/logo.png';
import { AppContext } from '../context/AppContext';
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
// import {useClerk,useUser, UserButton } from "@clerk/clerk-react";


const Navbar = () => {
    const {username,showError,setShowError,login,setLogin,profile,setProfile,uname} = useContext(AppContext)
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location (used to check the current route)
  // const {openSignIn} = useClerk()
  // const {user} = useUser()

  const loginHandler = () => {

    if(login === true){

      setLogin(false)
      localStorage.removeItem("u_name")
      navigate('/')
    } else{
      navigate('/login')
    }

  }

 
  return (
    <div className='bg-white px-[3%] py-4 flex items-center justify-between'>
      <div className=' cursor-pointer' onClick={() => navigate('/')}>
        <img className='w-34' src={logo} alt="Logo" />
      </div>

      {/* Conditionally render the Home icon on both the Dashboard and Plant pages */}
      {/* {(location.pathname === '/dashboard' || location.pathname === '/plant') && ( */}
      {

login ? 
        <div className='flex items-center gap-8'>
          <div
            className='text-[#150f7c] flex items-center gap-1 text-lg font-medium cursor-pointer hover:bg-slate-200 px-2 py-1 rounded'
            onClick={() => navigate('/')} // When clicked, this will navigate to the home page
          >
            <IoMdHome />
            <p className='text-[#150f7c]'>Home</p>
          </div>
         
          <div
            className='text-[#150f7c] flex items-center gap-1 text-lg font-medium cursor-pointer hover:bg-slate-200 px-2 py-1 rounded'
            onClick={() => navigate('/dashboard')} // When clicked, this will navigate to the home page
          >
            <MdDashboard />
            <p className='text-[#150f7c]'>Dasboard</p>
          </div>
          
           
        </div>
        : ""}
      {/* )} */}

{/*  */}

      <div className='flex gap-3'>

          {
          login ? 

          <div className='flex items-center gap-1 border border-[#0f2e56] rounded px-6 py-2 '> 

          <FaUser className='text-[#0f2e56]'/>

          <div className=' text-[#0f2e56] font-bold 'x> <p>{uname ? uname : ""}</p></div>
          </div>

          : ""
        }

        

        <div onClick={() => loginHandler()} className='cursor-pointer font-semibold bg-[#0f2e56] text-white rounded px-6 py-2 hover:scale-90 transition-all duration-300 hover:underline' >
          <p>{`${login ? "Logout" : "Login"}`} </p>
        </div>


      </div>

      
      {/* Other Navbar content, if needed */}
    </div>
  );
};

export default Navbar;
