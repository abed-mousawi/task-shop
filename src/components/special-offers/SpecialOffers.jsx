import React from "react";
import handware from "../../assets/imgs/handwear.jpg";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "../slider/Slider";
function SpecialOffers({title}) {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4545/special")
      .then((res) => res.json())
      .then((res) => setMyData(res));
  }, []);
  return (
    <div className="p-5">
      <h3 className="my-3">{title}</h3>
      <div className="flex items-center gap-4">
      <Slider />
      </div>
    </div>
  );
}

export default SpecialOffers;
