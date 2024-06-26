/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Form = ({type, onSubmit}) => {
  const [data,setData] = useState({
    email : '',
    password : '',
    username : ''
  })
  const handleChange = (e) => {
    const {name, value}= e.target
    setData({
      ...data,
      [name] : value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
  }

  

  return (
<>

<div className="font-[sans-serif] text-[#333] bg-white flex items-center justify-center md:h-screen p-2 -mt-10">
      <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl rounded-md p-6">
        <a href=""><img
          src="/src/assets/BMSlogo.png" alt="logo" className='w-40 md:mb-4 mb-12' />
        </a>
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1">
            <img src="https://readymadeui.com/signin-image.webp" className="lg:w-11/12 w-full object-cover" alt="login-image" />
          </div>
          <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold text-blue-600">{
                type === "Login" ? "Welcome Back! Login Here..." : "Welcome! Register Here..."
              }

              </h3>
            </div>
            <div>
               {
                type === "Register" && (
              <div className="relative flex items-center">
                <input onChange={handleChange} name="username" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter  Name"  />
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 48 48"><g fill="none" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><circle cx="24" cy="11" r="7"/><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z"/></g></svg>
            
              </div> )
}
              </div> <br />

            <div>
              <div className="relative flex items-center">
                <input onChange={handleChange}  name="email" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mt-8">
              <div className="relative flex items-center">
                <input onChange={handleChange}  name="password" type="password" required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-6">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              { type === 'Login' && (
              <div>
                <Link  to='/register' className="text-blue-600 text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>
             ) }
            </div>
            <div className="mt-12">
              { type === 'Login' && (
              <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Sign in
              </button>) 
}
{ type === 'Register' && (
              <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Sign up
              </button>) 
}


             {
              type === "Login" &&(
              <p  className="text-sm text-center mt-8"> Do not Have Account? <Link to="/register"  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register Here</Link></p>
           )  }
           {
            type === "Register" &&(
              <p  className="text-sm text-center mt-8"> Already have Account? <Link to="/login"  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login Here</Link></p>
           )}
      
              </div>
          </form>
        </div>
      </div>
    </div>

</> 
 )
}

export default Form