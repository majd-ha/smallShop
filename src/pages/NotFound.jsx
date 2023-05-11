import React from "react";
import { TbError404 } from "react-icons/tb";
export default function NotFound() {
  return (
    <div className="bg-space h-screen w-[100%] bg-center bg-cover text-white">
      <div className="bg-[#00000087]  h-screen w-[100%]">
        <h1 className="text-6xl text-center py-10">
          {" "}
          <TbError404 size={"2em"} className="mx-auto" />{" "}
        </h1>
        <p className="text-center text-3xl font-chakra">Sorry Page Not Found</p>
      </div>
    </div>
  );
}
