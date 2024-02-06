import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAward } from "react-icons/fa";

function Services() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4545/services")
      .then((res) => res.json())
      .then((res) => setMyData(res));
  }, []);

  console.log(myData);
  return (
    <ul className="w-full flex p-5 shadow-xl">
      {myData?.map((item) => (
        <li key={item.id} className="w-1/4  text-[#b3b3b3]">
          <div className="w-full flex flex-col items-center">
            <div>
              <FaAward className="text-[50px] " />
            </div>
            <span className="text-sm text-center">{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Services;
