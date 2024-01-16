import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Camp from "./Camp";

const MedicalCamp = () => {

    const [camps, setCamps] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/camps')
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
                    camps.map((camp, index) => <Camp key={index} camp={camp}></Camp>)
                }
            </div>
        </div>
    );
};

export default MedicalCamp;