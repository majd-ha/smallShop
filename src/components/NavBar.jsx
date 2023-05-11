import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TiArrowBack } from "react-icons/ti";
import { Link, NavLink, useLocation } from "react-router-dom";
export default function NavBar() {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const route = location.pathname
    .split("/")
    .filter((route, i, arr) => route !== " " && i !== arr.length - 1)
    .join("/");

  return (
    <div className="w-full flex items-center justify-between px-10 py-5  bg-white border border-transparent border-b-orange-500   text-gray-400 max-sm:relative max-sm:h-[4rem]">
      {location.pathname === "/" ? (
        <Link to={"/"} className={"text-2xl italic font-serif"}>
          M-Shop
        </Link>
      ) : (
        <Link to={`${route}`}>
          {" "}
          <TiArrowBack size={"2rem"} color="orange" />{" "}
        </Link>
      )}

      <ul
        onClick={() => setShow(false)}
        className={`w-[50%] z-10 flex items-center justify-around max-sm:ulnavsm ${
          show ? "max-sm:h-[4.5rem]" : "max-sm:h-0"
        }`}
      >
        <NavLink className=" liItems" to={"products"}>
          <p className="max-sm:hidden"> products</p>
          <p className="hidden max-sm:block">
            <SiHomeassistantcommunitystore size={"1.3rem"} />
          </p>
        </NavLink>
        <NavLink className=" liItems" to={"cart"}>
          <p className="max-sm:hidden"> cart</p>
          <p className="hidden max-sm:block">
            <AiOutlineShoppingCart size={"1.3rem"} />
          </p>
        </NavLink>
        <NavLink className=" liItems" to={"offers"}>
          <p className="max-sm:hidden"> offers</p>
          <p className="hidden max-sm:block">
            <BsFillLightningChargeFill size={"1.3rem"} />
          </p>
        </NavLink>
      </ul>
      <p
        onClick={() => setShow(!show)}
        className="hidden max-sm:block cursor-pointer"
      >
        {show ? (
          <MdArrowDropUp size={"2rem"} />
        ) : (
          <MdArrowDropDown size={"2rem"} />
        )}
      </p>
    </div>
  );
}
