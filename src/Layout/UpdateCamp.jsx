import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const UpdateCamp = () => {

    const camp = useLoaderData();

    const { _id, camp_name, camp_fees, venue, service, health, audience, photo, description } = camp

    const handleUpdateCamp = event => {
        event.preventDefault();
        const form = event.target;
        const camp = form.camp.value;
        const fees = form.fees.value;
        const venue = form.venue.value;
        const service = form.service.value;
        const health = form.health.value;
        const audience = form.audience.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const updatedCamp = { camp, fees, venue, service, health, audience, photo, description };
        console.log(updatedCamp);

        fetch(`http://localhost:5000/add-a-camp/${_id}`, {
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
                        title: 'Camp Added Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    return (
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
                        <input type="text" name='camp' placeholder="Camp Name" defaultValue={camp_name} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input type="text" name='fees' placeholder="Camp fees" defaultValue={camp_fees} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Venue</span>
                        </label>
                        <input type="text" name='venue' placeholder="Venue" defaultValue={venue} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name='service' placeholder="Service" defaultValue={service} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Camp Fee</span>
                        </label>
                        <input type="text" name='health' placeholder="Health" defaultValue={health} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Audience</span>
                        </label>
                        <input type="text" name='audience' placeholder="Audience" defaultValue={audience} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo" defaultValue={photo} className="input input-bordered" required />
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
    );
};

export default UpdateCamp;