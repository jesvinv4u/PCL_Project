import { useEffect, useState } from "react";

const MedicalCamp = () => {

    const [camp, setCamp] = useState([]);

    useEffect(() => {
        fetch('camp.json')
            .then(res => res.json())
            .then(data => setCamp(data))
    }, [])

    return (
        <div>
            <h3 className="text-9xl">Number of camp: {camp.length}</h3>
        </div>
    );
};

export default MedicalCamp;