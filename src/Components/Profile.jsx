import { useState } from "react";

export const Profile = () => {
    const [name, setName]=useState("Chavi")
    const [age, setAge]=useState("23")
    const [address, setAddress]=useState("Mumbai")
  return (
    <div className="flex flex-col items-center min-h-screen w-[400px] mx-auto p-2   rounded-lg shadow-2xl  bg-[linear-gradient(165deg,#f0fdf4,_#ffffff,#f3e8ff)] ">
      <div className="h-[54px]  gap-[2px] ">
        <div className="h-[32px]">
          <h2 className="font-[800] text-[24px] leading-[32px] tracking-[0] font-month">
            Hey {name}!
          </h2>
        </div>
        <div className="text-center font-mont font-[400] text-[14px] leading-[20px] tracking-[0] h-[20px]">
          Your Profile
        </div>
      </div>
      <div className="w-full mt-[28px] self-start">
        <div>
          <h3 className="font-[500] text-[18px] leading-[24px] tracking-[0] font-mont">
            Name
          </h3>
        </div>
        <div className="relative mt-[10px]">
          
          <input
            type="text"
            className="w-full p-[10px] pl-[26px] border-[1px] h-[42.666664123535156px] placeholder-font-mont placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[22px] placeholder:tracking-[0] placeholder:text-black border-gray-400 rounded-lg"
            placeholder="Enter Destination"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="w-full mt-[16px] self-start">
        <div>
          <h3 className="font-[500] text-[18px] leading-[24px] tracking-[0] font-mont">
            Age
          </h3>
        </div>
        <div className="relative mt-[10px]">
          
          <input
            type="Number"
            className="w-full p-[10px] pl-[26px] border-[1px] h-[42.666664123535156px] placeholder-font-mont placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[22px] placeholder:tracking-[0] placeholder:text-black border-gray-400 rounded-lg"
            placeholder="Enter Destination"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="w-full mt-[28px] self-start">
        <div>
          <h3 className="font-[500] text-[18px] leading-[24px] tracking-[0] font-mont">
            Address
          </h3>
        </div>
        <div className="relative mt-[10px]">
          
          <input
            type="text"
            className="w-full p-[10px] pl-[26px] border-[1px] h-[42.666664123535156px] placeholder-font-mont placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[22px] placeholder:tracking-[0] placeholder:text-black border-gray-400 rounded-lg"
            placeholder="Enter Destination"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="w-full bg-blue-600 flex  justify-center rounded-lg  h-[44px] mt-[10px] font-[600] text-white">
        <button className="w-full hover:cursor-pointer p-[10px]" onClick={() => window.alert('Profile Updated')}>
          Save Profile
        </button>
      </div>
    </div>
  );
};
