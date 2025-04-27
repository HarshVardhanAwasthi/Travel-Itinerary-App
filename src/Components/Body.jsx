import { createBrowserRouter, RouterProvider } from "react-router-dom"
import JourneyDetails from "./journeyDetails"
import JourneyPlan from "./JourneyPlan"

const Body=()=>{

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<JourneyDetails/>
        },
        {
            path:"/:destination",
            element:<JourneyPlan/>
        }

    ])


    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body