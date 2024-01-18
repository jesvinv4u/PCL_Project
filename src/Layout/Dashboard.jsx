import { NavLink, Outlet } from "react-router-dom";
import useCamp from "../Hooks/useCamp";
import { FaHouseUser } from "react-icons/fa6";


const Dashboard = () => {
    
    const [camp] = useCamp();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                        <FaHouseUser />
                            Organizer Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            Add a Camp</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            Manage Camps ({camp.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            Manage Registered Camps</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;