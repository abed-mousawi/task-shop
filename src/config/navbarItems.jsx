import { FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { TbCategoryFilled } from "react-icons/tb";

export const navbarDownItem = [
  {
    icon: <FaUser />,
    url: "/users",
  },
  {
    icon: <IoHome />,
    url: "/",
  },
  {
    icon: <TbCategoryFilled />,
    url: "/products",
  },
  {
    icon: <HiShoppingCart />,

    url: "/carts",
  },
];
