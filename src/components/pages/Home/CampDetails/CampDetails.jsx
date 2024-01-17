import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CampDetails = () => {

    const detail = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // const { Image, CampName, VenueLocation, TargetAudience, PurposeDescription, BenefitsDescription } = detail;
    console.log(detail);

    const handleAddToCart = camp => {
        console.log(camp, user.email);
        if (user && user.email) {

        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${detail.Image})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mt-16">
                    <h1 className="mb-5 text-2xl font-bold">Camp : {detail.CampName}</h1>
                    <h1 className="mb-5 text-2xl font-bold">Venue : {detail.VenueLocation}</h1>
                    <h1 className="mb-5 text-2xl font-bold">Audience : {detail.TargetAudience}</h1>
                    <p className="mb-5 font-bold">Description : {detail.PurposeDescription}</p>
                    <p className="font-bold">Benefits : {detail.BenefitsDescription}</p>
                    <button onClick={() => handleAddToCart(detail)} className="btn btn-primary mt-5">Join Camp</button>
                </div>
            </div>
        </div>
    );
};

export default CampDetails;