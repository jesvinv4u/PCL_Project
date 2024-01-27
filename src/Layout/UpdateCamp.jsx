import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateCamp = () => {

    const camp = useLoaderData();

    const { _id, name, fees, venue_location, services, professionals, audience, image, description } = camp

    const handleUpdateCamp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const fees = form.fees.value;
        const venue_location = form.venue_location.value;
        const services = form.services.value;
        const professionals = form.professionals.value;
        const audience = form.audience.value;
        const image = form.image.value;
        const description = form.description.value;
        const updatedCamp = { name, fees, venue_location, services, professionals, audience, image, description };
        console.log(updatedCamp);

        fetch(`https://reset-assignment-12-server.vercel.app/add-a-camp/${_id}`, {
            method: 'Put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCamp)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Updated Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>Medical Camp | Update Your Camp</title>
            </Helmet>
            <div>
                <SectionTitle
                    subHeading='Refresh Info'
                    heading='Update Camp'
                >
                </SectionTitle>
                <form onSubmit={handleUpdateCamp}>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Camp Name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Fees</span>
                            </label>
                            <input type="text" name='fees' placeholder="Camp fees" defaultValue={fees} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Venue</span>
                            </label>
                            <input type="text" name='venue_location' placeholder="Venue" defaultValue={venue_location} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service</span>
                            </label>
                            <input type="text" name='services' placeholder="Service" defaultValue={services} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Healthcare Professionals</span>
                            </label>
                            <input type="text" name='professionals' placeholder="Health" defaultValue={professionals} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Audience</span>
                            </label>
                            <input type="text" name='audience' placeholder="Audience" defaultValue={audience} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name='image' placeholder="image" defaultValue={image} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="description" defaultValue={description} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateCamp;