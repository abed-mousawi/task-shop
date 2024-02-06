import React from "react";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { TbCategoryFilled } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { navbarDownItem } from "../../config/navbarItems";
function NavbarDown() {
  const nav = useNavigate();
  const myPath = location.pathname;
  return (
    <div className="fixed w-full bottom-3 z-20">
      <ul className="flex items-center justify-around bg-[#eee] rounded-full py-5 mx-5 text-xl">
        {navbarDownItem?.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              myPath == item.url ? "text-blue-300" : ""
            }`}
            onClick={(e) => nav(item.url)}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarDown;
