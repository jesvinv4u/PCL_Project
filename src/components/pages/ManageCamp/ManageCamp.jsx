import { useEffect, useState } from "react";
import { FaTrashArrowUp } from "react-icons/fa6";
import { GiUpgrade } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCamp from "../../../Hooks/useCamp";
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ManageCamp = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
                            <th>Name</th>
                            <th>Price</th>
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





                                    {/* <Link to={`/update-camp/${item._id}`}> */}
                                    <button className="btn mx-auto block my-10" onClick={openModal}><GiUpgrade />
                                    </button>
                                    {/* </Link> */}
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal"
                                    >
                                        <form >
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input type="text" name='camp' placeholder="Camp Name" defaultValue={item.camp_name} className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Age</span>
                                                    </label>
                                                    <input type="text" name='fees' placeholder="Camp fees" defaultValue={item.camp_fees} className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Venue</span>
                                                    </label>
                                                    <input type="text" name='venue' placeholder="Venue" defaultValue={item.venue} className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Phone</span>
                                                    </label>
                                                    <input type="text" name='service' placeholder="Service" defaultValue={item.service} className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Camp Fee</span>
                                                    </label>
                                                    <input type="text" name='health' placeholder="Health" defaultValue={item.health} className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Audience</span>
                                                    </label>
                                                    <input type="text" name='audience' placeholder="Audience" defaultValue={item.audience} className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Photo Url</span>
                                                    </label>
                                                    <input type="text" name='photo' placeholder="Photo" defaultValue={item.photo} className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Description</span>
                                                    </label>
                                                    <input type="text" name='description' placeholder="description" defaultValue={item.description} className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <div className="form-control mt-6">
                                                <input className="btn btn-primary" type="submit" value="Update" />
                                            </div>
                                        </form>
                                        <div className="flex justify-center items-center my-3">
                                            <button className="btn" onClick={closeModal}>Close</button>
                                        </div>
                                    </Modal>







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
    );
};

export default ManageCamp;