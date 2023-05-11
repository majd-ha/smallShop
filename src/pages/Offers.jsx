import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function Offers() {
  return (
    <div>
      <BsFillLightningChargeFill
        size={"8rem"}
        color={"gray"}
        className="mx-auto my-4"
      />
      <p className="capitalize text-center">no offers for you right now </p>
    </div>
  );
}
