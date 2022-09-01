import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Carrucel(imagen) {
    console.log(imagen)


    return (
        <div className="mt-2 ">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-3/4 "
            >
                <div className="">
                <SwiperSlide className="flex justify-center items-center">
                    <img
                        className=" sm:w-3/4 "
                        src={imagen.imagen}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center ">
                    <img
                        className=" sm:w-3/4 "
                        src={imagen.imagen1}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center  w-1/2">
                    <img
                        className=" sm:w-3/4"
                        src={imagen.imagen2}
                        alt="image slide 3"
                    />
                </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}