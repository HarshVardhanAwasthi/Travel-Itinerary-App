import Accomodation from "../../Resources/accomodation-1.png";
import { style1 } from "../utils/fontStyle";
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaClockRotateLeft } from "react-icons/fa6";

const HotelCard = ({hotel}) => {
  return (
    <div className="w-[198px] h-[239px] bg-white shadow-2xl border-1 border-gray-400 rounded-2xl">
      <div className="relative">
        <img
          className="w-[198px] h-[124px] rounded-t-2xl"
          src={hotel.image}
          alt="hotelimg"

        />
        <div className="absolute left-1 bottom-1 w-[73px] h-[16px] rounded-xs flex bg-blue-500">
            <div className="w-[10px] h-[10px]"><p className="text-white w-[9px] h-[8.55px] m-[1.7px]"><FaStar className="text-xs"/></p></div>
          <p className="ml-2 text-white text-[8px] leading-[16px] tracking-[0] font-[200]" style={style1}>{hotel.ratings} </p>
          <span className="ml-1 text-white text-[8px] leading-[16px] tracking-[0] font-[200]" style={style1}>Very Good</span>
        </div>
      </div>
      <div>
        <div className="">
            <div className="mx-[4px]"><h3 className=" text-[14px] leading-[15px] tracking-[0] font-[700] mt-1" style={style1}>{hotel.name}</h3></div>
            <div className="mx-[4px] "><h4 className=" inline text-[12px] leading-[16px] tracking-[0] font-[600]" style={style1}>Check In:</h4><span className="ml-1 text-[12px] leading-[16px] tracking-[0] font-[100]" style={style1}>{hotel.Checkin}</span></div>
            <div className="mx-[4px] "><h4 className=" inline text-[12px] leading-[16px] tracking-[0] font-[600]" style={style1}>Check Out:</h4><span className="ml-1 text-[12px] leading-[16px] tracking-[0] font-[100]" style={style1}>{hotel.Checkout}</span></div>
        </div>
        <div className="mt-6 mx-[4px] flex justify-between">
            
                <div className="text-[12px] leading-[16px] tracking-[0] font-[700]" style={style1}>{hotel.NoofNights}</div>
                <div className={`text-[12px] leading-[16px] tracking-[0] font-[700] ${hotel.status === "Confirmed" ? "text-lime-400" : "text-orange-600"}`}>{hotel.status==="Confirmed"?<GiConfirmed  className="mx-1 inline"/>:<FaClockRotateLeft className="mx-1 inline"/>}{hotel.status}</div>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
