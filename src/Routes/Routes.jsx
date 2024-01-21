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
import PaymentHistory from "../Layout/PaymentHistory";
import PrivateRoute from "./PrivateRoute";


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
        element: <PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'ourCamp',
        element: <OurCamp></OurCamp>
      },
      {
        path: 'add-a-camp',
        element: <PrivateRoute><AddCamp></AddCamp></PrivateRoute>
      },
      {
        path: 'manage-camps',
        element: <PrivateRoute><ManageCamp></ManageCamp></PrivateRoute>
      },
      {
        path: 'update-camp/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({ params }) => fetch(`http://localhost:5000/add-a-camp/${params.id}`)
      },
      {
        path: 'manage-registered-camps',
        element: <PrivateRoute><ManageRegisteredCamps></ManageRegisteredCamps></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/add-a-camp')
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
    ]
  },
]);