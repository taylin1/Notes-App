import React from 'react'

function SignUpPage() {
  return (
    <div>
      <div className="bg-slate-900 h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">

        <h1 className="text-white mb-4 font-bold text-xl">
            Noti Application
        </h1>

        <form className="bg-gray-800 w-100 rounded-lg p-6 ">
          <h1 className="text-2xl text-white font-bold text-center mb-4">Sign Up:</h1>
          
          <div className=" space-x-8 mb-4">
          <label className="text-white ">Create an Email:</label>
          <input
            type="email"
            placeholder="Please enter email"
            className="input bg-gray-200 rounded-xl py-2 "
            value=""
          />
          </div>

          <div className=" space-x-5">
          <label className="text-white">Create a Password:</label>
          <input
            type="password"
            placeholder="Please enter password"
            className="input bg-gray-200 rounded-xl py-2"
            value=""
          />
          </div>
          <div className=''>
            <button className="bg-indigo-800 rounded-xl text-white p-2 space-x-4">Sign up</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SignUpPage
