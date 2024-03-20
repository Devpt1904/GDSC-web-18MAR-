import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Register({ isLogin }) {
  const [name, setName] = useState("")
  const [pnumber, setPnumber] = useState("")
  const [password, setPassword] = useState("")
  const handleRegister = () => {
    console.log("login button pressed")
    console.log("Name : ",name)
    console.log("Phone number : ",pnumber)
    console.log("Password : ",password)
  }
  return (
       <div className='flex flex-col bg-blue-200 w-full items-center justify-center h-screen'>
        <h1>{isLogin ? "Logged in" : "User need to Sign in" }</h1>
        <div className='flex flex-col border-2 border-sky-700 rounded-lg p-10'>
            <h1 className='text-5xl font-semibold' ><u>Register</u></h1>
            <p className='my-5 text-2xl font-semibold'><u><span>Enter your Details below</span></u></p>
            <input value={name} onChange={(e)=>(setName(e.target.value))} type="text" placeholder="Name" className='my-4 outline-none border-b-2  border-black text-3xl p-2 bg-transparent'/>
            {/* <h1>{name}</h1> */}
            <input value={pnumber} onChange={(e)=>(setPnumber(e.target.value))} type="email" placeholder="Email" className='my-4 outline-none border-b-2  border-black text-3xl p-2 bg-transparent '/>
            <input value={password} onChange={(e)=>(setPassword(e.target.value))} type="password" placeholder="Password" className='my-4 outline-none border-b-2  border-black text-3xl p-2  bg-transparent'/>
            <button onClick={handleRegister} className='bg-yellow-200 text-3xl p-2 hover:bg-yellow-400'> Create Account</button>
            {isLogin ? <h1>User is logged in</h1> : 
              <Link to='/'>
              <p className='mt-2 text-center'> Already registered ? Pls Login </p>
              </Link>
            } 
        </div>
    </div>   
  )
}

export default Register
