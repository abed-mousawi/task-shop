import React from "react";

import Banner from "../components/banner/Banner";
import Services from "../components/services/Services";
import SpecialOffers from "../components/special-offers/SpecialOffers";

function Home() {
  return (
    <div className="mb-[50px]">
      <Banner />
      <Services />

      <SpecialOffers title={"موارد داندان پزشکی خاص"}/>
      <SpecialOffers title={"ابزار دندان پزشکی"} />
    </div>
  );
}

export default Home;
