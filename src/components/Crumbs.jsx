import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
export default function Crumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbsArr = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((singleRoute, i, arr) => {
      currentLink += `/${singleRoute}`;
      return (
        <div className=" text-white flex gap-1 items-center" key={singleRoute}>
          <TiArrowBack />
          <Link key={singleRoute} to={`${currentLink}`}>
            {" "}
            {singleRoute}{" "}
          </Link>{" "}
        </div>
      );
    });
  return (
    <div className="bg-orange-500 rounded-lg px-1 flex gap-2 text-white w-fit my-2">
      {crumbsArr}
    </div>
  );
}
