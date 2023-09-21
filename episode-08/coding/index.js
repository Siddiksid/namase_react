import  ReactDOM  from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import About from "./src/components/About";
import RestaurantcMenu from "./src/components/RestaurantMenu";












const AppLayout=()=>{
    return(
        <div className="App">
             <Header />
              <Outlet />
           
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
              path:"/",
              element:<Body />
            },
            {
                path:"/contact",
                element:<ContactUs />
            },
            {
                path:"/about",
                element:<About />
            },{
                path:"/restaurants/:resId",
                element:<RestaurantcMenu />
            }
        ],
        errorElement:<Error />
    },
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);