import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../../assets/doctors/1.png';
import slide2 from '../../../../assets/doctors/2.png';
import slide3 from '../../../../assets/doctors/3.png';
import slide4 from '../../../../assets/doctors/4.png';
import slide5 from '../../../../assets/doctors/5.png';
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Doctors = () => {
        return (
            <section>
                <SectionTitle
                subHeading={"Our Special Doctors"}
                heading={"Doctors"}
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Dr. Joe</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Dr. Ricky</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Dr. Kate</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Dr. Charlie</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Dr. Chaplin</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        );
};

export default Doctors;