import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu p-4 font-semibold">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="">
                                    Organizer Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="add-a-camp">
                                    Add a Camp
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="manage-camps">
                                    Manage Camps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="manage-registered-camps">
                                    Manage Registered Camps
                                </NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    Participant
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/participant-profile">
                                    Profile Management
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/registered-camps">
                                    Registered Camps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payment-history">
                                    Payment History
                                </NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/dashboard/professional-profile">
                                    Professional Profile Management
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="">
                                        Organizer Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="add-a-camp">
                                        Add a Camp
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="manage-camps">
                                        Manage Camps
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="manage-registered-camps">
                                        Manage Registered Camps
                                    </NavLink>
                                </li>
                                <div className="divider"></div>
                                <li>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        Participant
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to="/dashboard/participant-profile">
                                        Profile Management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/registered-camps">
                                        Registered Camps
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment-history">
                                        Payment History
                                    </NavLink>
                                </li>
                                <div className="divider"></div>
                                <li>
                                    <NavLink to="/dashboard/professional-profile">
                                        Professional Profile Management
                                    </NavLink>
                                </li>
                            </>
                    }
                    <li>
                        <NavLink to="/dashboard/feedback-and-ratings">
                            Feedback & Ratings
                        </NavLink>
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