import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import MedicalCamp from "../MedicalCamp/MedicalCamp";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MedicalCamp></MedicalCamp>
            <Testimonials></Testimonials>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;