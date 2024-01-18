import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home/Home";
import CampDetails from "../components/pages/Home/CampDetails/CampDetails";
import AvailableCamps from "../components/pages/Home/AvailableCamps/AvailableCamps";
import SignUp from "../components/pages/SignUp/SignUp";
import Login from "../components/pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import OurCamp from "../components/pages/Home/CampDetails/ourCamp";


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
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'camp-details/:id',
        element: <CampDetails></CampDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/camps/${params.id}`)
      },
      {
        path: 'availableCamps',
        element: <AvailableCamps></AvailableCamps>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'ourCamp',
        element: <OurCamp></OurCamp>
      }
    ]
  },
]);