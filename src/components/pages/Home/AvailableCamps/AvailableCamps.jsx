import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AvailableCamps = () => {

    const [camps, setCamps] = useState([]);
    const [search, setSearch] = useState('');
    console.log(search);

    useEffect(() => {
        fetch(`https://reset-assignment-12-server.vercel.app/camps?search=${search}`)
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])

    // const handleSearch = event => {
    //     event.preventDefault();
    //     const searchItem = event.target.name.value;
    //     setSearch(searchItem);
    //     // console.log(searchItem);
    // }

    return (
        <>
            <Helmet>
                <title>Medical Camp | Available Camp</title>
            </Helmet>
            <div className="pt-16">
                <SectionTitle
                    subHeading={"Here Is Our Available Camps"}
                    heading={"Camps"}
                ></SectionTitle>


                <form onChange={(e) => setSearch(e.target.value)} className="flex items-center justify-center">
                    <input className="input input-bordered join-item rounded" placeholder="Search Camp" name="name" />
                </form>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2a lg:grid-cols-3 xl:grid-cols-3 max-w-full mx-auto gap-4 p-4">
                    {
                        camps.filter((item) => {
                            return search.toLocaleLowerCase() === ''
                                ? item
                                : item.CampName.toLocaleLowerCase().includes(search)
                        }).map(camp => <div key={camp._id} className="card bg-base-100 shadow-xl border border-blue-500 m-12">
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
        </>
    );
};

export default AvailableCamps;