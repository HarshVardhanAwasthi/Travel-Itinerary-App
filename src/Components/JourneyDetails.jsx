import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { Link } from "react-router-dom";
import { options } from "../utils/options";

const JourneyDetails = () => {


  
    const [destination, setDestination]=useState("")
    const [selected, setSelected] = useState("");

    const handleSelect = (option) => {
      setSelected(option.name);
    };

  return (
    <div className="flex flex-col items-center min-h-screen w-[400px] mx-auto p-2   rounded-lg shadow-2xl  bg-[linear-gradient(165deg,#f0fdf4,_#ffffff,#f3e8ff)] ">
      <div className="h-[54px]  gap-[2px] ">
        <div className="h-[32px]">
          <h2 className="font-[800] text-[24px] leading-[32px] tracking-[0] font-month">
            Plan Your Journey, Your Way!
          </h2>
        </div>
        <div className="text-center font-mont font-[400] text-[14px] leading-[20px] tracking-[0] h-[20px]">
          Let’s create your personalised travel experience
        </div>
      </div>
      <div className="w-full mt-[28px] self-start">
        <div>
          <h3 className="font-[500] text-[18px] leading-[24px] tracking-[0] font-mont">
            Where would you like to go?
          </h3>
        </div>
        <div className="relative mt-[10px]">
          <MapPinIcon className="absolute left-1 top-5.5 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            className="w-full p-[10px] pl-[26px] border-[1px] h-[42.666664123535156px] placeholder-font-mont placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[22px] placeholder:tracking-[0] placeholder:text-black border-gray-400 rounded-lg"
            placeholder="Enter Destination"
            value={destination}
            required
            onChange={(e)=>setDestination(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="w-full mt-[10px] self-start">
        <div className="mt-[10px]">
          <h3 className="font-[500] text-[18px] leading-[24px] tracking-[0] font-mont">
            How Long Will You Stay?
          </h3>
        </div>
        <div className="mt-[10px]  relative">
          <CalendarDaysIcon className="absolute top-5.5 left-1 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <select
            className="w-full  appearance-none p-[8px] pl-[28px] border-[1px] h-[42.666664123535156px] border-gray-400 rounded-lg"
            name="duration" required
          >
            <option value="" selected disabled>
              Select Duration
            </option>
            <option value="0">Less than 1 Week</option>
            <option value="1">1 Week</option>
            <option value="2">2 Week</option>
            <option value="3">More than 2 Weeks</option>
          </select>
          <div className="absolute top-2.5 right-3 flex items-center pointer-events-none">
            <span className="text-gray-500">▼</span>
          </div>
        </div>
      </div>
      <div className="w-full mt-[10px] self-start">
      <div className="mt-[10px]">
        <h3 className="font-[500] text-[18px] leading-[24px] tracking-[0] font-mont">
          Who are you traveling with?
        </h3>
      </div>
      <div className="flex mt-[10px] justify-center flex-wrap">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(option)} // On click, set the selected option
            className={`flex w-[169px] justify-evenly items-center h-[50px] border-1 border-gray-400 rounded-lg hover:cursor-pointer m-2 
              ${selected === option.name ? "bg-blue-500 text-white" : ""}`} // Apply styles when selected
          >
            <img
              src={option.image}
              alt={option.name}
              className="h-[24px] w-[24px]"
            />
            <span className="font-mont font-[400] text-[16px] leading-[22px]">
              {option.name}
            </span>
          </div>
        ))}
      </div>
    </div>
      <div className="w-full bg-blue-600 flex  justify-center rounded-lg  h-[44px] mt-[110px] font-[600] text-white">
        <Link className="w-full" to={`/${destination}`}>
        <button className="w-full hover:cursor-pointer p-[10px]">
          Continue
        </button>
        </Link>
      </div>
    </div>
  );
};
export default JourneyDetails;
