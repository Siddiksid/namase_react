import  ReactDOM  from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import About from "./src/components/About";
import RestaurantcMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";
import { lazy,Suspense} from "react";




// Chunking 
// Code splitting
// Dynamic Bundling
// Lazy loading
// on demand loading



 const Grocery=lazy(()=> import("./src/components/Grocery"));

const About=lazy(()=>import("/src/components/About"));

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
                element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },{
                path:"/restaurants/:resId",
                element:<RestaurantcMenu />
            },{
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement:<Error />
    },
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);