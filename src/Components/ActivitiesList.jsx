import ActivityCard from "./ActivityCard"
import ActivityData from "../utils/activityMockData"

const ActivitiesList=()=>{
    return(
        <div  className="h-[429px] w-full p-1 ">
           {ActivityData.map((Activity, index) => (
            <div className="my-2.5" key={index}>
              <ActivityCard Activity={Activity} />
            </div>
          ))}
        </div>
    )
}

export default ActivitiesList