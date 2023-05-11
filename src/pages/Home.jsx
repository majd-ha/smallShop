import React from "react";
import { AiOutlineShoppingCart, AiTwotoneShopping } from "react-icons/ai";
import { BiHappyHeartEyes } from "react-icons/bi";
export default function Home() {
  return (
    <div className="h-[100vh]  ">
      <div className=" w-[100%] h-[100%] text-orange-500 ">
        <div className="w-[80%] mx-auto  rounded-xl p-5 mt-10">
          <h1 className="text-7xl text-center p-5 font-Comfortaa">
            Best choice
          </h1>
        </div>
        <div className="flex justify-between items-center w-[60%] max-sm:w-[90%] mx-auto">
          <p className="p-2 rounded-full outline outline-orange-500">
            {" "}
            <AiOutlineShoppingCart size={"4rem"} />
          </p>
          <p className="p-2 rounded-full outline outline-orange-500">
            {" "}
            <AiTwotoneShopping size={"4rem"} />
          </p>
          <p className="p-2 rounded-full outline outline-orange-500">
            <BiHappyHeartEyes size={"4rem"} />
          </p>
        </div>
      </div>
    </div>
  );
}
