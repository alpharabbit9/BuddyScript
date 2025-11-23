import React from 'react'
import shape1 from "../../assets/images/shape1.png";
import shape2 from "../../assets/images/shape2.svg";
import shape3 from "../../assets/images/shape3.svg";
import loginBanner from "../../assets/images/login.png"
import logo from '../../assets/images/logo.svg'
import { useAuthStore } from '../../store/useAuthStore';

const Login = () => {

  const {isLoggingIn ,login }=useAuthStore();

  const HandleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const formData = {
      email,
      password
    }


    login(formData);

    console.log(formData);

  }


    return (
      <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center relative overflow-hidden px-6">

        <img src={shape1} className="w-40 absolute top-0 left-0 opacity-70" />
        <img src={shape2} className="w-72 absolute top-0 right-0 opacity-70" />
        <img src={shape3} className="w-72 absolute bottom-0 right-10 opacity-70" />


        <div className="flex w-full max-w-6xl items-center gap-10 pl-12 relative z-10 pt-7">


          <div className="hidden lg:flex w-1/2 justify-center">
            <img src={loginBanner} className="w-[350px]" />
          </div>


          <div className="w-72 bg-white shadow-lg p-6 space-y-5 relative">

            <div className="flex justify-center items-center">
              <img src={logo} alt="" className="w-24" />
            </div>
            <div>
              <p className="text-xs text-center">Get Started Now</p>



              <h2 className="text-center text-lg -mt-1 font-semibold text-gray-800">
                Log in to your account
              </h2>
            </div>


            <button className="w-full border rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-4"
              />
              <span className="text-sm font-medium">Register with Google</span>
            </button>


            <div className="flex items-center gap-3">
              <span className="flex-1 h-px bg-gray-200"></span>
              <span className="text-[10px] text-gray-400">OR</span>
              <span className="flex-1 h-px bg-gray-200"></span>
            </div>


            <div className="space-y-2">

              <form onSubmit={HandleSubmit}>
                <input
                  name='email'
                  type="email"
                  placeholder="Email"
                  className="input input-bordered rounded-xl mb-2 w-full text-sm h-8"
                />
                <input
                  name='password'
                  type="password"
                  placeholder="Password"
                  className="input input-bordered rounded-xl mb-2  w-full text-sm h-8"
                />

                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                  <span className="text-xs mb-2 text-gray-600">
                    Remember me
                  </span>
                </div>


                <button className="btn bg-[#1890FF] text-white mt-2 mb-2 w-full rounded-xl text-sm h-8">
                  Login now
                </button>

              </form>

            </div>




            <p className="text-center text-[11px] text-gray-500">
              Don't have an account?
              <span className="text-blue-500 cursor-pointer"> Create New Account</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  export default Login
