import React from "react";
import { ImSpinner9 } from "react-icons/im";
export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner9 size={"3rem"} color="orange" className="animate-spin" />
    </div>
  );
}
