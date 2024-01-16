import { useLoaderData } from "react-router-dom";

const CampDetails = () => {

    const detail = useLoaderData();
    console.log(detail);

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
                    <button className="btn btn-primary mt-5">Join Camp</button>
                </div>
            </div>
        </div>
    );
};

export default CampDetails;