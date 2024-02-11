import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import FutureCamp from "../FutureCamp/FutureCamp";
import MedicalCamp from "../MedicalCamp/MedicalCamp";
import Testimonials from "../Testimonials/Testimonials";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Medical Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <MedicalCamp></MedicalCamp>
            <NewsLetter></NewsLetter>
            <Testimonials></Testimonials>
            <Doctors></Doctors>
            <FutureCamp></FutureCamp>
        </div>
    );
};

export default Home;