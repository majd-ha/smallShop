import React from "react";
import { BiError } from "react-icons/bi";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <NavBar />

      <div className="p-5 pt-10">
        <p className="w-full ">
          <BiError size={"3rem"} className="mx-auto" color="red" />
        </p>
        <p className=" text-3xl text-center break-words font-chakra">
          {" "}
          {error.message}{" "}
        </p>
      </div>
    </div>
  );
}
