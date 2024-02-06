import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";

import BasicMenu from "../BasicMenu";

function Header() {
  return (
    <div className="flex justify-between p-6 items-center bg-white shadow-lg">
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-[#eee] p-3 rounded-full">
            <BasicMenu />
          </div>
          <div className="bg-[#eee] p-3 rounded-full">
            <PiPhoneCallFill />
          </div>
        </div>
      </div>
      <div>LOGO</div>
      <div>
        <div className="bg-[#eee] p-3 rounded-full">
          <IoSearchSharp />
        </div>
      </div>
      {/* <div><BasicMenu/></div> */}
    </div>
  );
}

export default Header;
