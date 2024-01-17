import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const AvailableCamps = () => {

    const [camps, setCamps] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/camps')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])

    return (
        <div className="pt-16">
            <SectionTitle
                subHeading={"Here Is Our Available Camps"}
                heading={"Camps"}
            ></SectionTitle>
            <div className="grid grid-cols-3 mx-auto">
                {
                    camps.map(camp => <div key={camp._id} className="card w-96 bg-base-100 shadow-xl border border-blue-500 mb-12">
                        <figure><img className="h-56" src={camp.Image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {camp.CampName}
                                <div className="badge badge-gray">Fees: {camp.CampFees}</div>
                            </h2>
                            <div>
                                <p className="border rounded-lg border-sky-500 p-4 bg-gray-200 font-semibold mb-4">Specialized Services : {camp.SpecializedServices}</p>
                                <p className="border rounded-lg border-sky-500 p-4 bg-gray-200 font-semibold mb-4">Healthcare Professionals : {camp.HealthcareProfessionals}</p>
                                <p className="border rounded-lg border-sky-500 p-4 bg-gray-200 font-semibold">Target Audience : {camp.TargetAudience}</p>
                            </div>
                            <div className="card-actions">
                                <div className="badge badge-outline bg-blue-500 font-semibold text-white p-4">Location: {camp.VenueLocation}</div>
                                <div className="badge badge-outline bg-blue-500 font-semibold text-white p-4">Schedule: {camp.ScheduledDateTime}</div>
                            </div>
                            <Link to={`/camp-details/${camp._id}`}><button className="btn btn-outline">Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AvailableCamps;