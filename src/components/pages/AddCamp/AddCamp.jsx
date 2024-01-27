import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../SectionTitle/SectionTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const addCamp = {
                name: data.name,
                fees: parseFloat(data.fees),
                date_time: data.date_time,
                venue_location: data.venue_location,
                services: data.services,
                professionals: data.professionals,
                audience: data.audience,
                description: data.description,
                image: res.data.data.display_url
            }
            const camp = await axiosSecure.post('/add-a-camp', addCamp);
            console.log(camp.data)
            if (camp.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the camp.`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div>
            <SectionTitle heading="Join camp" ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                   <div className="grid grid-cols-2 gap-6">
                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Camp Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Camp Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Camp Fees*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Camp Fees"
                            {...register('fees', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    
                    
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date and Time*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Date and Time"
                            {...register('date_time', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                   
                   
                   
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Venue Location*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Venue Location"
                            {...register('venue_location', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    
                    
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Specialized Services*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Specialized Services"
                            {...register('services', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                   
                   
                   
                   
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Healthcare Professionals*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Healthcare Professionals"
                            {...register('professionals', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                   
                   
                   
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Target Audience*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Target Audience"
                            {...register('audience', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    
                    
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Comprehensive Description*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Comprehensive Description"
                            {...register('description', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                   </div>


                    <div className="form-control w-full mt-4">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn mt-4">
                        Add a Camp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;