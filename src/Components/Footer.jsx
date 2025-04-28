import {  FiHome,FiHeart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex  justify-center mt-17">
      <div className="fixed bottom-0 flex justify-center items-center w-[400px] bg-white h-[72px]">
        <div className=" w-[73.8px] h-[48px]">
          <div  className="flex items-center justify-center w-[48px] h-[48px] bg-indigo-300 rounded-[100px] "><FiHome className="w-[24px] h-[24px] text-blue-500 font-[900]"/></div>
        </div>
        <div className=" w-[73.8px] h-[48px]">
          <div  className="flex items-center justify-center w-[48px] h-[48px] "><FiSearch className="w-[24px] h-[24px] text-blue-500 font-[900]"/></div>
        </div>
        <div className=" w-[73.8px] h-[48px]">
          <div  className="flex items-center justify-center w-[48px] h-[48px] "><FaPlus className="w-[24px] h-[24px] text-blue-500 font-[900]"/></div>
        </div>
        <div className=" w-[73.8px] h-[48px]">
          <div  className="flex items-center justify-center w-[48px] h-[48px] "><FiHeart className="w-[28px] h-[24px] text-blue-500 font-[900]"/></div>
        </div>
        <div className=" w-[73.8px] h-[48px]">
          <div  className="flex items-center justify-center w-[48px] h-[48px] "><FaRegUser className="w-[24px] h-[24px] text-blue-500 font-[900]"/></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
