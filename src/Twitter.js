import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { MdOutlineCancelPresentation } from "react-icons/md";
const Twitter = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <MdOutlineCancelPresentation className="text-white"/>
      <div className="flex justify-center">
      <FaTwitter className="text-white text-center text-3xl mt-8"/>
      </div>
    <h1 className="text-center text-6xl text-white font-bold mt-8">
      Sign in to Twitter
    </h1>
    <button className="text-2xl mt-12 bg-white w-3/6 py-4 rounded-full flex justify-center items-center mx-auto">
  <FcGoogle className="mr-2" />
  <span>Sign in with Google</span>
</button>
    <button className="text-2xl mt-6 bg-white py-4 w-3/6 rounded-full flex justify-center items-center mx-auto"><FaApple className="mr-2"/><span className="font-bold">Sign in with Apple</span></button>

    <div className="mt-6 w-3/6 flex items-center justify-center mx-auto">
  <hr className="w-full border-t-2 border-white" />
  <p className="text-center text-white">OR</p>
  <hr className="w-full border-t-2 border-white" />
</div>
{/* <input className="bg-black border-white w-3/6 border-2 py-6 rounded text-white mx-auto" 
       placeholder="Phone, email, or username" 
       type="text" /> */}
       <div className="mt-6 flex justify-center items-center">
  <input className="bg-black border-white w-3/6 border-2 py-6 rounded text-gray-700" 
         placeholder="Phone, email, or username" 
         type="text" />
</div>
        <button className="text-black font-bold text-2xl mt-6 bg-white py-4 w-3/6 rounded-full flex justify-center items-center mx-auto">Next</button>

        <button className="border-white border-2 text-white font-bold text-2xl mt-6 bg-black py-4 w-3/6 rounded-full flex justify-center items-center mx-auto">Forgot password?</button>
        <p className="mt-4 text-center text-white">
          Don't have an account?<a href className="text-blue-400">Sign up</a>
        </p>
    </div>
  )
}

export default Twitter