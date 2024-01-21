import { Link } from "react-router-dom";
import { FaBriefcaseMedical, FaNotesMedical } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useCamp from "../../../../Hooks/useCamp";

const Navbar = () => {

    const { user, logOut, googleSignIn } = useContext(AuthContext);
    const [camp] = useCamp();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/availableCamps">Available Camps</Link></li>
        <li><Link to="">Dashboard</Link></li>
        <li><Link to="">Contact Us</Link></li>
        <li>
            <Link to="/dashboard/ourCamp">
                <button className="btn">
                    <FaNotesMedical className="mr-2 text-xl"></FaNotesMedical>
                    <div className="badge bg-blue-800">+{camp.length}</div>
                </button>
            </Link>
        </li>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 max-w-full mx-auto bg-black text-white">
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
                <div className="flex navbar-end">
                    {
                        user ?
                            <>
                                <div className="flex items-center">
                                    <p>{user?.email}</p>
                                    <img className="rounded-full w-12 h-12 ml-2" alt="" src={user?.photoURL} />
                                </div>
                                <button className="btn btn-outline bg-white font-bold text-sm text-black ml-2" onClick={handleLogout}>Log out</button>
                            </>
                            :
                            <>
                                <Link className="btn btn-outline bg-white font-bold text-sm text-black ml-2" to='/login'>Login</Link>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline bg-white font-bold text-sm text-black">Google</button>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;