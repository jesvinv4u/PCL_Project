import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCamp from "../../../Hooks/useCamp";

const AddCamp = () => {

    const { handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCamp();

    const handleAddCamp = () => {
        const form = event.target;
        const camp_name = form.camp_name.value;
        const photo = form.photo.value;
        const camp_fees = form.camp_fees.value;
        const date_time = form.date_time.value;
        const venue = form.venue.value;
        const service = form.service.value;
        const health = form.health.value;
        const audience = form.audience.value;
        const description = form.description.value;
        const addCamp = { camp_name, photo, camp_fees, date_time, venue, service, health, audience, description };

        if (user && user.email) {
            axiosSecure.post('/add-a-camp', addCamp)
                .then(res => {
                    reset();
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Camp Added Successfully',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch();
                    }
                })
        }
    }

    return (
        <>
            <Helmet>
                <title>Medical Camp | Add Your Camp</title>
            </Helmet>
            <div className=" border-blue-800">
                <div className="mt-16">
                    <div className="text-center mb-5">
                        <h1 className="text-5xl font-bold">Add a Camp!</h1>
                    </div>
                    <div className="w-full shadow-2xl rounded-xl bg-base-100 border border-blue-800">
                        <form onSubmit={handleSubmit(handleAddCamp)} className="card-body grid grid-cols-3 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Camp Name</span>
                                </label>
                                <input type="text" name='camp_name' placeholder="Camp Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Camp Fees</span>
                                </label>
                                <input type="text" name='camp_fees' placeholder="Camp Fees" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date & Time</span>
                                </label>
                                <input type="Date Time" name='date_time' placeholder="Date & Time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Venue Location</span>
                                </label>
                                <input type="text" name='venue' placeholder="Venue Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Specialized Services</span>
                                </label>
                                <input type="text" name='service' placeholder="Specialized Services" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Healthcare Professionals in
                                        Attendance</span>
                                </label>
                                <input type="text" name='health' placeholder="Healthcare Professionals in Attendance" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Target Audience</span>
                                </label>
                                <input type="text" name='audience' placeholder="Target Audience" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comprehensive Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Comprehensive Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-4 items-center">
                                <input className="btn btn-primary" type="submit" value="Add Camp" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCamp;