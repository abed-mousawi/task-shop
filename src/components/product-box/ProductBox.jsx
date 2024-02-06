import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import handware from "../../assets/imgs/handwear.png";
function ProductBox({ price, title }) {
  const [count, setCount] = useState(0);

  const handlePlusNumber = () => {
    setCount(count + 1);
  };
  const handelMinNumber = () => {
    setCount(count - 1);
  };
  const addToCart = () => {};
  return (
    <div className="rounded rounded-b-xl">
      {/* img */}
      <div>
        <img className="rounded rounded-t-xl" src={handware} alt="" />
      </div>
      {/* details */}
      <div className="flex flex-col gap-2 border-b-2 pb-3 p-2">
        <span className="text-sm">{title}</span>
        <span className="text-red-700">
          {price} <span className="text-red-500">تومان</span>
        </span>
      </div>
      {/* add to cart */}
      <div className="flex items-center justify-between py-3 px-1">
        <div className="flex items-center gap-2 border rounded-full p-2 px-5">
          <button onClick={handlePlusNumber} className="">
            +
          </button>
          <span>{count}</span>
          <button onClick={handelMinNumber}>-</button>
        </div>
        <div>
          <button
            onClick={addToCart}
            className="text-[10px] bg-[#2885ff] text-white p-3 rounded-2xl"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
