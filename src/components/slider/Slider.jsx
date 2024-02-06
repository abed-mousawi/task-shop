import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import ProductBox from "../product-box/ProductBox";

export default function Slider() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4545/special")
      .then((res) => res.json())
      .then((res) => setMyData(res));
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {myData?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[350px] rounded-md shadow-md my-5"
          >
            <ProductBox price={item.price} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
