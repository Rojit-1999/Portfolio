import React from 'react'

const Register = () => {
  return (
    <div>
      <div>
        <form action="">
            <div>
                <label htmlFor="name">Name Please👋</label>
                <input
                type="text"
                name="name"
                id="name"
                className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2rem]"
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2rem]"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                id="password"
                className="border-[#2d2d2d]/5 pr-[1rem] pl-[0.5rem]  border-[1px] shadow-md rounded-md h-[2rem]"
                />
            </div>
            <button
                type="submit"
                className="px-[1.5rem] py-[0.5rem] bg-secondary/80 rounded-full text-white font-semibold hover:bg-secondary w-full"
            >
                Register
            </button>
            <div className='text-[0.8rem] flex gap-1'>
                <p>Already have an account?</p>{" "}
                <a href="/login" className="text-blue-500">
                Login
                </a>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
