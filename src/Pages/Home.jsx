import React from "react";
import avatarImg from '../assets/rahul334.jpg'; // relative path from Home.jsx
function Home() {
  return (
    <div className="text-white flex w-full justify-between item-start p-10 md:p-20 ">
      <div className="md:w-1/2 md:pt-10">
        <h1 className="text-3xl md:text-6xl flex font-bold leading-normal tracking-tighter ">
          Hello I am Rahul.
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quasi
          officiis consequatur consequuntur illum nesciunt perferendis totam
          assumenda, eos pariatur tempore, dolorum unde delectus suscipit?
        </p>
        <button className="mt-5 md:mt-10 px-3 border rounded-3xl py-2  bg-[#465697] text-white font-bold flex justify-center  hover:opacity-85 duration-300 hover:scale-105 cursor-pointer">
          Contact Me
        </button>
      </div>
      <div className="ml-10">
        <img src={avatarImg} alt="" className="w-3/5 rounded-4xl  " />
      </div>
    </div>
  );
}

export default Home;
