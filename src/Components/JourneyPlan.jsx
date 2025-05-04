import Plane from "../../Resources/Plane.png";
import { style1} from "../utils/fontStyle";
import { Link, useParams } from "react-router-dom";
import ActivityCalender from "./ActivityCalender";
import Accommodation from "./Accomodation";
import TripDetails from "./TripDetails";
import { LiaHikingSolid } from "react-icons/lia";
import ActivitiesList from "./ActivitiesList";
import Footer from "./Footer";



const JourneyPlan = () => {
  const params = useParams();
  const City = params.destination;

 

  return (
    <div className="flex  flex-col justify-start mx-auto w-[400px] p-2  bg-white shadow-2xl ">
      <div className="flex items-center justify-between w-full self-start">
        <div className="">
          <h2
            className=" font-mont  mt-2.5 font-[800] text-[24px]  text-gray-900  leading-[32px] tracking-[0]"
            style={style1}
          >
            Hello Chavi!
          </h2>
          <p
            className="font-mont  font-[400] text-[16px]  text-black  leading-[16px] tracking-[0]"
            style={style1}
          >
            Ready for the trip?
          </p>
        </div>
        <div className="flex  items-center justify-center p-0 m-0 w-[38px] h-[38px] bg-orange-500 rounded-4xl">
          <div
            className=" font-mont  font-[600] text-[20px]  text-white  leading-[16px] tracking-[0]"
            style={style1}
          >
            <Link to="/profile">C</Link>
          </div>
        </div>
      </div>
      <div className="my-[16px]">
        <div className="">
          <h3
            className="font-mont  font-[600] text-[18px]  text-black  leading-[24px] tracking-[0]"
            style={style1}
          >
            Your Upcoming Trip
          </h3>
        </div>
        <div>
          <TripDetails/>
        </div>
      </div>
      <div
        className="bg-blue-500 mt-[16px] h-[122px] rounded-2xl flex flex-col bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${Plane})` }}
      >
        <div className="p-2 flex w-full justify-between">
          <div>
            <h1
              className="text-[16px] leading-[24px] tracking-[0] text-white font-[600]"
              style={style1}
            >
              Flight Details
            </h1>
            <p
              className="text-[14px] leading-[20px] tracking-[0] text-white font-[100]"
              style={style1}
            >
              26.01.2025, 10:50 am
            </p>
          </div>
          <div
            className="text-[10px] leading-[16px] tracking-[0] text-lime-300 font-[600] underline"
            style={style1}
          >
            See all
          </div>
        </div>
        <div className="flex">
          <div className="p-2">
            <p
              className="text-[16px] leading-[16px] tracking-[0] text-white font-[700]"
              style={style1}
            >
              DEL
            </p>
            <p
              className="text-[12px] leading-[16px] tracking-[0] text-white font-[400]"
              style={style1}
            >
              Delhi, India
            </p>
          </div>
          <div className="rotate-45 text-4xl  text-white">↗</div>
          <div className="p-2">
            <p
              className="text-[16px] leading-[16px] tracking-[0] text-white font-[700]"
              style={style1}
            >
              NRT
            </p>
            <p
              className="text-[12px] leading-[16px] tracking-[0] text-white font-[400]"
              style={style1}
            >
              Narita, Tokyo
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="flex  justify-between items-baseline my-[16px]">
          <div className="">
            <h3
              className="text-[18px] leading-[24px]  tracking-[0] font-[800]"
              style={style1}
            >
              Accommodation
            </h3>
          </div>
          <div
            className="text-[10px] leading-[16px] tracking-[0] text-indigo-600 font-[600] underline"
            style={style1}
          >
            See all
          </div>
        </div>
        <div>
          <Accommodation/>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="flex  justify-between items-baseline my-[16px]">
          <div className="">
            <h3
              className="text-[18px] leading-[24px]  tracking-[0] font-[800]"
              style={style1}
            >
              Activities
            </h3>
          </div>
          <div
            className="text-[10px] leading-[16px] tracking-[0] text-indigo-600 font-[600] underline"
            style={style1}
          >
            See all
          </div>
        </div>
      </div>
      <div>
        <ActivityCalender/>
      </div>
      <div className="mt-[16px]  mb-[6px]  h-[20px]" >
        <div className="flex items-center">
          <div className="text-[12px] p-1 leading-3 tracking-normal font-[200] bg-blue-500  rounded-2xl  text-white text-center" style={style1}>Day 1  27.01.2025</div>
          <div className="flex items-center text-[12px] p-1 ml-3 leading-3 tracking-normal font-[200]  rounded-2xl  text-blue-500 text-center" style={style1}><div><LiaHikingSolid/></div><div>3  Activities</div></div>
        </div>
      </div>
      <div>
        <ActivitiesList/>
      </div>
      <Footer className="fixed  bottom-0 width-[100%]"/>
    </div>
  );
};

export default JourneyPlan;
