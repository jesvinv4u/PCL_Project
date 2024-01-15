import SectionTitle from '../../../SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/doctors/online.jpg';
import './FutureCamp.css';

const FutureCamp = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
                subHeading='Our Upcoming Camps'
                heading='We will provide online service'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-800 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>August 20, 2020</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi voluptatem nulla aut nostrum ad quisquam ex nobis dolorum voluptatum iure omnis maxime deleniti, assumenda animi voluptas, blanditiis adipisci numquam dignissimos placeat et neque. Saepe laudantium pariatur aliquid placeat ipsam sed, natus ratione sapiente ut soluta, vero iste distinctio unde.</p>
                    <button className="btn btn-active">See Update</button>
                </div>
            </div>
        </div>
    );
};

export default FutureCamp;