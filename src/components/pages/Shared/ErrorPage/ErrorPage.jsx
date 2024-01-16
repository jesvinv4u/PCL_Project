import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="text-4xl font-bold items-center text-center mt-[300px]">
                <h1>Oops!!!</h1>
                <Link to='/'><button className="btn btn-xs bg-black text-white sm:btn-sm md:btn-md lg:btn-lg">Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;