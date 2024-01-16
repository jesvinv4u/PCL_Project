import { Link } from "react-router-dom";
import { FaBriefcaseMedical } from "react-icons/fa6";

const Navbar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/availableCamps">Available Camps</Link></li>
        <li><Link to="">Dashboard</Link></li>
        <li><Link to="">Contact Us</Link></li>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl  bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <FaBriefcaseMedical className="w-12 h-12" />
                        <p className="font-bold uppercase italic">Medical <br /> Camp</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex navbar-end gap-6">
                    <Link to="/signUp">Register</Link>
                    <Link to="">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;