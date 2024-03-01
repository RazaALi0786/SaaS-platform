import React, { useState } from "react";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../../firebase'
const auth=getAuth(app)

const Register = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [err,setErr]=useState("");

  const navigate=useNavigate();

  const createUser=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((value)=>{
      console.log(value)
      navigate('/home')
    })
    .catch((error)=>setErr(error.message))
    
  }

  return (
    <div>
      <div className="relative p-8 bg-opacity-50 border drop-shadow-2xl rounded-xl bg-gradient-to-tr from-slate-700 to-sky-900 border-slate-400 backdrop-filter backdrop-blur-sm">
        <h1 className="mb-6 text-4xl font-bold text-center text-white">
          Register
        </h1>
        <form action="" onClick={(e)=>e.preventDefault()}>
          <div className="relative my-4">
            <input
              type="text"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0  border-b-2 border-gray-300  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
            >
              Your Name
            </label>
            <BiUser className="absolute top-0 -mx-3 right-4" />
          </div>
          <div className="relative my-5">
            <input
              onChange={e=>setEmail(e.target.value)}
              value={email}
              type="email"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0  border-b-2 border-gray-300  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
            >
              Your Email
            </label>
            <BiUser className="absolute top-0 -mx-3 right-4" />
          </div>

          <div>
            <input
              onChange={e=>setPassword(e.target.value)}
              value={password}
              type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0  border-b-2 border-gray-300  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-9 scale-75 mx-[1px] -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute mx-5 -mt-5 right-4" />
          </div>
          
          <p className="text-red-600">{err}</p>

          <button
          onClick={createUser}
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-gray-900 hover:bg-gradient-to-tr from-sky-900 to-slate-700 hover:text-white py-2 transition-colors duration-300"
            type="Submit"
          >
            Register
          </button>

          <div>
            <span className="m-4 ">
              Already create an Account?
              <Link className="m-2 text-blue-500" to="/Login">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
