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
import AddCamp from "../components/pages/AddCamp/AddCamp";
import ManageCamp from "../components/pages/ManageCamp/ManageCamp";
import UpdateCamp from "../Layout/UpdateCamp";
import ManageRegisteredCamps from "../components/pages/Home/ManageRegisteredCamps/ManageRegisteredCamps";
import Payment from "../Layout/Payment";


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
        loader: ({ params }) => fetch(`https://reset-assignment-12-server.vercel.app/camps/${params.id}`)
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
      },
      {
        path: 'add-a-camp',
        element: <AddCamp></AddCamp>
      },
      {
        path: 'manage-camps',
        element: <ManageCamp></ManageCamp>
      },
      {
        path: 'update-camp/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({ params }) => fetch(`https://reset-assignment-12-server.vercel.app/add-a-camp/${params.id}`)
      },
      {
        path: 'manage-registered-camps',
        element: <ManageRegisteredCamps></ManageRegisteredCamps>,
        loader: () => fetch('https://reset-assignment-12-server.vercel.app/add-a-camp')
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
    ]
  },
]);