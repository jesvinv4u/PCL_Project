import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home/Home";
import CampDetails from "../components/pages/Home/CampDetails/CampDetails";
import AvailableCamps from "../components/pages/Home/AvailableCamps/AvailableCamps";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: 'camp-details/:id',
            element: <CampDetails></CampDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/camps/${params.id}`)
        }, 
        {
          path: 'availableCamps',
          element: <AvailableCamps></AvailableCamps>
        }
      ]
    }
  ]);