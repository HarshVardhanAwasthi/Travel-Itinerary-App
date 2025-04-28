import HotelsData from "../utils/mockData"
import HotelCard from "./HotelCard"


const Accommodation=()=>{
    return(
        <div className="overflow-x-auto flex space-x-4 w-full scrollbar-hidden">
          {HotelsData.map((hotel, index) => (
            <div key={index}>
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
    )
}

export default Accommodation