import { style1 } from "../utils/fontStyle"
const  ActivityCard=({Activity})=>{
    console.log(Activity)
    return(
        <div className="flex w-full h-[127px] rounded-lg border-1 border-gray-400  overflow-hidden ">
            <div className="w-[127px] h-[127px]  flex-shrink-0 rounded-l-lg">
                <img className="w-[127px] h-[127px] object-cover  rounded-l-lg" src={Activity.image} alt="temple"/>
            </div>
            <div className="ml-2.5 flex flex-col  justify-between">
                <div className="text-[14px] leading-[15px] font-[500] tracking-normal wrap-break-word mt-2" style={style1}>{Activity.name}</div>
                <div className="mb-1.5">
                <div><span className="text-[12px] leading-[16px] font-[500] tracking-normal ">Timing:</span> <span className="text-[12px] leading-[16px] font-[400] tracking-normal text-gray-400">{Activity.Timing}</span></div>
                <div><span className="text-[12px] leading-[16px] font-[500] tracking-normal ">Duration:</span> <span className="text-[12px] leading-[16px] font-[400] tracking-normal text-gray-400">{Activity.Dration}</span></div>
                <div><span className="text-[12px] leading-[16px] font-[500] tracking-normal ">Pickup:</span> <span className="text-[12px] leading-[16px] font-[400] tracking-normal text-gray-400">{Activity.Pickup}</span></div>
                </div>
            </div>
            
        </div>
    )
}
export default ActivityCard