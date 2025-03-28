import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <form className="p-10 bg-white shadow-md shadow-[#0000001a] rounded-md text-black flex flex-col items-center justify-center gap-4 w-fit">
          <h1 className="font-bold text-primary text-[2rem]">Login</h1>
          <div className="flex flex-col gap-1 w-full">
            <label>Name Please👋</label>
            <input
              type="text"
              placeholder="Full Name"
              className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2rem] focus:outline-none  placeholder:text-[0.8rem]"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label>Email</label>
            <input
              type="email"
              placeholder='Email Address'
              className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2rem] focus:outline-none  placeholder:text-[0.8rem]"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label>Password</label>
            <input
              type="password"
              placeholder='Password'
              className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2rem] focus:outline-none  placeholder:text-[0.8rem]"
            />
          </div>
          <button
            type="submit"
            className="px-[1.5rem] py-[0.5rem] bg-secondary/80 rounded-full text-white font-semibold hover:bg-secondary w-full"
          >
            Login
          </button>
          <div className="text-[0.8rem] flex gap-1">
            <p>Don't have account yet?</p>{" "}
            <a href="/register" className="text-blue-500">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage
