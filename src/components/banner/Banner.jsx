import React from "react";
import banner from "../../assets/imgs/banner.jpg";
function Banner() {
  return (
    <div className="py-5 w-full px-4 shadow-lg flex justify-center">
      <img className="rounded-3xl w-full" src={banner} alt="" />
    </div>
  );
}

export default Banner;
