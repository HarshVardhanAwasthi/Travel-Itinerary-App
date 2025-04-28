import { createBrowserRouter, RouterProvider } from "react-router-dom"
import JourneyDetails from "./JourneyDetails"
import JourneyPlan from "./JourneyPlan"
import { Profile } from "./Profile"

const Body=()=>{

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<JourneyDetails/>
        },
        {
            path:"/:destination",
            element:<JourneyPlan/>
        },
        {
            path:"/profile",
            element:<Profile/>
        }

    ])


    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body