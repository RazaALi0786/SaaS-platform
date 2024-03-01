import React from 'react'
import Header from './Header'
const Login = () => {
  return (
<>
    <Header/>
    <div  className=' flex justify-center items-center bg-gradient-to-r from-yellow-500 to-indigo-600 w-full h-screen'>
        <form className='flex flex-col gap-7 h-56 bg-slate-700 w-1/3'> 
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button type="button" className=" w-20  ml-[200px] pl-6 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
        </form>
    </div>
    </>
  )
}

export default Login