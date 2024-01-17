import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import React from 'react';
import Modal from 'react-modal';
import axios from "axios";

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

const CampDetails = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const detail = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // const { Image, CampName, VenueLocation, TargetAudience, PurposeDescription, BenefitsDescription } = detail;

    const handleAddToCart = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const age = form.age.value;
        const gender = form.gender.value;
        const phone = form.phone.value;
        const fee = form.fee.value;
        const health = form.health.value;
        const campInfo = { name, age, gender, phone, fee, health };
        console.log(campInfo);

        if (user && user.email) {
            axios.post('http://localhost:5000/addCamp', campInfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Camp Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
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
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${detail.Image})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mt-16">
                        <h1 className="mb-5 text-2xl font-bold">Camp : {detail.CampName}</h1>
                        <h1 className="mb-5 text-2xl font-bold">Venue : {detail.VenueLocation}</h1>
                        <h1 className="mb-5 text-2xl font-bold">Audience : {detail.TargetAudience}</h1>
                        <p className="mb-5 font-bold">Description : {detail.PurposeDescription}</p>
                        <p className="font-bold">Benefits : {detail.BenefitsDescription}</p>
                <button className="btn bg-blue-800 mx-auto block my-10" onClick={openModal}>Join Camp</button>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form onSubmit={handleAddToCart}>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input type="text" name='age' placeholder="Your Age" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <input type="text" name='gender' placeholder="Gender" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Camp Fee</span>
                                </label>
                                <input type="text" name='fee' placeholder="Fees" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Do you have blood pressure?</span>
                                </label>
                                <input type="text" name='health' placeholder="Yes or No" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>



                    <div className="flex justify-center items-center my-3">
                        <button className="btn" onClick={closeModal}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default CampDetails;