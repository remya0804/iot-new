// import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import { FaEyeSlash } from "react-icons/fa";
// import { FaRegEye } from "react-icons/fa";

// const Login = () => {

//   const [password,setPassword] = useState("")
//   const [showPassword,setShowPassword] = useState(false)
//   const navigate = useNavigate()
//   const {username,setUsername,showError,setShowError,login,setLogin} = useContext(AppContext)


//   console.log(username,password);

//   const submitHandler = (e) => {

//     e.preventDefault()

//     if(username === "Admin" &&  password === "admin123"){

//       navigate('/dashboard')
//       setLogin(true)

//     } else {

//       setShowError(true)
//     }

//   }

//   return (
//     <div className=''>

      
//       <form onSubmit={(e) => submitHandler(e)} className={` bg-white mt-20 w-[30%] m-auto px-4 py-8 rounded-lg`}>
//         <div className='text-center' >
//           <p className='text-[#0f2e56] text-2xl font-bold'>Login</p>
//           {/* <div className='bg-[#0f2e56] h-0.5 w-[60%] m-auto mt-1'></div> */}
//         </div>
//         <div className='flex flex-col w-[80%] m-auto mt-5 gap-6'>
//           <input required value={username} onChange={(e) => setUsername(e.target.value)} className='px-3 py-2 border border-[#0f2e56] outline-none rounded-lg' type="text" placeholder='Email' />
//           <div className='w-full relative'>
//             <input required value={password} onChange={(e) => setPassword(e.target.value)}  className='border w-full border-[#0f2e56] outline-none rounded-lg px-3 py-2 '  type={`${showPassword ? "text" : "password" }`} placeholder='Password' />
//             <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute right-5 bottom-3 text-slate-500'>  {showPassword ?    <FaRegEye /> : <FaEyeSlash />}        
//             </div>
//           </div>
          
//         </div>
//         <div  className='text-center mt-5 '>
//           <div className={`my-3 ${showError ? "block" : "hidden"}`}><p className='text-red-500'>User doesn't exist!!!!</p></div>
//           <button  className='cursor-pointer rounded-lg px-6 py-2 bg-[#0f2e56] text-white hover:scale-90 transition-all duration-300 w-[80%] font-semibold hover:underline'>Login</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login





import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { FaEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { username, setUsername, showError, setShowError, setLogin } = useContext(AppContext);


  const submitHandler = (e) => {

    e.preventDefault();

    if(username === "admin" && password === "admin123"){
      setShowError(false)
      navigate('/dashboard')
      setLogin(true)
      localStorage.setItem("u_name","admin")
    
    } else{
      setShowError(true)
    }
  }

  return (
    <div className=''>
      <form onSubmit={(e) => submitHandler(e)} className={`bg-white mt-20 w-[30%] m-auto px-4 py-8 rounded-lg`}>
        <div className='text-center'>
          <p className='text-[#0f2e56] text-2xl font-bold'>Login</p>
        </div>
        <div className='flex flex-col w-[80%] m-auto mt-5 gap-6'>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='px-3 py-2 border border-[#0f2e56] outline-none rounded-lg'
            type='text'
            placeholder='Email'
          />
          <div className='w-full relative'>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border w-full border-[#0f2e56] outline-none rounded-lg px-3 py-2 '
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder='Password'
            />
            <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute right-5 bottom-3 text-slate-500'>
              {showPassword ? <FaRegEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
        <div className='text-center mt-5 '>
          <div className={`my-3 ${showError ? 'block' : 'hidden'}`}>
            <p className='text-red-500'>User doesn't exist!!!!</p>
          </div>
          <button className='cursor-pointer rounded-lg px-6 py-2 bg-[#0f2e56] text-white hover:scale-90 transition-all duration-300 w-[80%] font-semibold hover:underline'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

// const submitHandler = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('https://s2k7465720.execute-api.us-east-1.amazonaws.com/prod', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json(); // Parse the JSON response

//     if (response.ok) { // Check if the response was successful (status code 200-299)
//       setLogin(true);
//       navigate('/dashboard');
//     } else {
//       setShowError(true);
//       console.error('Login failed:', data.message); // Log the error message
//     }
//   } catch (error) {
//     setShowError(true);
//     console.error('Error during login:', error); //log network errors.
//   }
// };