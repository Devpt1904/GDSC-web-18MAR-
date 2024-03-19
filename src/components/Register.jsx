import React from 'react'

function Register() {
  return (
       <div className='flex flex-col bg-blue-200 w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-2 border-sky-700 rounded-lg p-10'>
            <h1 className='text-5xl font-semibold' ><u>Register</u></h1>
            <p className='my-5 text-2xl font-semibold'><u><span>Enter your Details below</span></u></p>
            <input type="text" placeholder="Name" className='my-4 outline-none border-b-2  border-black text-3xl p-2 bg-transparent'/>
            <input type="email" placeholder="Email" className='my-4 outline-none border-b-2  border-black text-3xl p-2 bg-transparent '/>
            <input type="password" placeholder="Password" className='my-4 outline-none border-b-2  border-black text-3xl p-2  bg-transparent'/>
            <button className='bg-yellow-200 text-3xl p-2 hover:bg-yellow-400'> Create Account</button>
        </div>
    </div>   
  )
}

export default Register
