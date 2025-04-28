import { useParams } from "react-router-dom"
import { style,style1 } from "../utils/fontStyle"
import  Tokyo from "../../Resources/Tokyo.png"
import { ClockIcon } from "@heroicons/react/24/outline";
import { FaUserFriends } from "react-icons/fa";
import { LuNotebookTabs } from "react-icons/lu";


const TripDetails=()=>{
    const  params=useParams()
    const  City=params.destination;
    return(
        <div
          className="mt-[16px] p-4 w-full h-[330px] rounded-2xl bg-cover flex flex-col justify-between relative"
          style={{ backgroundImage: `url(${Tokyo})` }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[15%]  bg-gradient-to-t from-black/0  via-black/0 to-transparent backdrop-blur-[2px] z-0"></div>

          <div className="flex items-start justify-between">
            <div>
              <h1
                className="font-[900] text-[45px] leading-[24px]  text-white tracking-0"
                style={style}
              >
                {City.toUpperCase()}
              </h1>
              <p
                className="mt-4 font-[400] text-[12px] leading-[16px] text-white tracking-[0]"
                style={style1}
              >
                27.01.2025 - 02.02.2025
              </p>
            </div>
            <div className="text-2xl text-white">↗</div>
          </div>
          <div className="flex justify-evenly w-full  z-10 ">
            <div className="flex ">
              <div className="h-[28px] w-[28px] bg-neutral-800 rounded-4xl flex justify-center items-center mr-2">
                <ClockIcon className="h-[16px]  w-[16px] text-lime-300" />
              </div>
              <div className=" text-white  mt-0.5">
                <p
                  className="font-[600] text-[12px] leading-[12px] tracking-[0]"
                  style={style1}
                >
                  8 Days
                </p>
                <p
                  className="text-[10px] leading-[10px] tracking-[0] font-[400]"
                  style={style1}
                >
                  Duration
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="h-[28px] w-[28px] bg-neutral-800 rounded-4xl flex justify-center items-center mr-2">
                <FaUserFriends className="h-[16px]  w-[16px] text-lime-300" />
              </div>
              <div className=" text-white  mt-0.5">
                <p
                  className="font-[600] text-[12px] leading-[12px] tracking-[0]"
                  style={style1}
                >
                  4 (2M, 2F)
                </p>
                <p
                  className="text-[10px] leading-[10px] tracking-[0] font-[400]"
                  style={style1}
                >
                  Group Size
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="h-[28px] w-[28px] bg-neutral-800 rounded-4xl flex justify-center items-center mr-2">
                <LuNotebookTabs className="h-[16px]  w-[16px] text-lime-300" />
              </div>
              <div className=" text-white  mt-0.5">
                <p
                  className="font-[600] text-[12px] leading-[12px] tracking-[0]"
                  style={style1}
                >
                  14
                </p>
                <p
                  className="text-[10px] leading-[10px] tracking-[0] font-[400]"
                  style={style1}
                >
                  Activities
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}
export default TripDetails