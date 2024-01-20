import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Camp from "./Camp";
import { Link } from "react-router-dom";

const MedicalCamp = () => {

    const [camps, setCamps] = useState([]);

    useEffect(() => {
        fetch('https://reset-assignment-12-server.vercel.app/camps')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading={"Let's See Our Popular Medical Camps"}
                heading={"Camps"}
            ></SectionTitle>
            <div className="grid grid-cols-3 mx-auto">
                {
                    camps.slice(0, 6).map((camp, index) => <Camp key={index} camp={camp}></Camp>)
                }
            </div>
            <Link to='/availableCamps'>
                <button className="btn btn-wide mx-auto block bg-blue-600 border-0">See All Camps</button>
            </Link>
        </div>
    );
};

export default MedicalCamp;