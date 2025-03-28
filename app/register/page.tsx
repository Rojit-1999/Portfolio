import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <form
          action=""
          className="p-10 bg-white shadow-md shadow-[#0000001a] rounded-md text-black flex flex-col items-center justify-center gap-4 w-fit"
        >
          <h1 className="font-bold text-primary text-[2rem]">Register</h1>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Name Please👋</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              id="name"
              className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2rem] placeholder:text-[0.8rem] focus:outline-none w-full "
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2.2rem] placeholder:text-[0.8rem] focus:outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2.2rem] placeholder:text-[0.8rem] focus:outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password"> Confirm Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Confirm Password"
              className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2.2rem] placeholder:text-[0.8rem] focus:outline-none w-full"
            />
          </div>
          <button
            type="submit"
            className="px-[1.5rem] py-[0.5rem] bg-secondary/80 rounded-full text-white font-semibold hover:bg-secondary w-full"
          >
            Register
          </button>
          <div className="text-[0.8rem] flex gap-1">
            <p>Already have an account?</p>{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register
