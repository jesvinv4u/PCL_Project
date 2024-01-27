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
import ProfileManagement from "../components/pages/ProfileManagement/ProfileManagement";
import RegisteredCamps from "../components/pages/RegisteredCamps/RegisteredCamps";
import FeedbackAndRatings from "../components/pages/FeedbackAndRatings/FeedbackAndRatings";
import ProfessionalProfile from "../components/pages/ProfessionalProfile/ProfessionalProfile";


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
        loader: ({ params }) => fetch(`https://reset-assignment-12-server.vercel.app/add-a-camp/${params.id}`)
      },
      {
        path: 'manage-registered-camps',
        element: <PrivateRoute><ManageRegisteredCamps></ManageRegisteredCamps></PrivateRoute>,
        loader: () => fetch('https://reset-assignment-12-server.vercel.app/add-a-camp')
      },
      {
        path: 'participant-profile',
        element: <ProfileManagement></ProfileManagement>
      },
      {
        path: 'registered-camps',
        element: <RegisteredCamps></RegisteredCamps>
      },
      {
        path: 'professional-profile',
        element: <ProfessionalProfile></ProfessionalProfile>
      },
      {
        path: 'feedback-and-ratings',
        element: <FeedbackAndRatings></FeedbackAndRatings>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
    ]
  },
]);