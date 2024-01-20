import { useEffect, useState } from "react";
import { FaTrashArrowUp } from "react-icons/fa6";
import { GiUpgrade } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCamp from "../../../Hooks/useCamp";
import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ManageCamp = () => {


    const [addCamp, setAddCamp] = useState([]);
    const [, refetch] = useCamp();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetch('http://localhost:5000/add-a-camp')
            .then(res => res.json())
            .then(data => setAddCamp(data))
    }, [])

    const handleDelete = id => {
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
                axiosSecure.delete(`/add-a-camp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Medical Camp | Manage Your Own Camp</title>
            </Helmet>
            <div className="">
                Item Count : {addCamp.length}
                <div className="overflow-x-auto">
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Update</th>
                                <th>Action</th>
                                <th>Image</th>
                                <th>Camp Name</th>
                                <th>Fees</th>
                                <th>venue</th>
                                <th>service</th>
                                <th>health</th>
                                <th>audience</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addCamp.map(item => <tr key={item._id}>
                                    <th>
                                        <Link to={`/dashboard/update-camp/${item._id}`}>
                                            <GiUpgrade />
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashArrowUp className="text-red-600"></FaTrashArrowUp>
                                        </button>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.camp_name}</td>
                                    <td>${item.camp_fees}</td>
                                    <td>{item.venue}</td>
                                    <td>{item.service}</td>
                                    <td>{item.health}</td>
                                    <td>{item.audience}</td>
                                    <td>
                                        {item.description.length > 10
                                            ? item.description.slice(0, 12)
                                            : item.description}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageCamp;