import React, { useEffect, useState } from "react";
import {
  BsCartPlusFill,
  BsFillCartDashFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Card({ pro, setCartItem, cartItems }) {
  const [show, setShow] = useState(false);
  const addTToCart = () => {
    // checking if element in the cart so remove it (and adjust the icon for the element who removed from cart )
    // this function called when element added or removed from cart
    const element = cartItems.find((el) => el.id == pro.id);
    if (element) {
      const newCart = cartItems.filter((el) => el.id != pro.id);
      setCartItem(newCart);
      setShow(false);
    } else {
      setCartItem((prev) => [...prev, pro]);
      setShow(true);
    }
  };
  const adjustIcon = () => {
    //here  we just check which element in cart so we can set its icon to show
    const element = cartItems.find((el) => el.id == pro.id);
    if (element) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    adjustIcon();
  }, []);
  return (
    <div
      key={pro.id}
      className="w-[30%] max-sm:w-[45%] shadow-inner border rounded-xl"
    >
      {/* img */}
      <div className="relative rounded-lg h-[250px] max-sm:h-[150px] p-3">
        <img
          loading="eager"
          src={pro.image}
          alt="loading"
          className=" object-contain overflow-x-hidden h-[90%] w-[100%] rounded-lg shadow-md aspect-3/2 "
        />
        <Link to={`${pro.id}`} className="absolute top-2 right-2">
          <BsInfoCircleFill
            size={"1em"}
            color="gray"
            className="text-2xl max-sm:text-sm"
          />
        </Link>
      </div>
      {/* control */}
      <div className="flex justify-between items-center">
        <h1 className="px-1 max-sm:text-xs w-[70%] h-[50px] overflow-hidden">
          {pro.title}
        </h1>
        <p
          className="px-2 text-2xl max-sm:text-sm cursor-pointer"
          onClick={addTToCart}
        >
          {!show ? (
            <BsCartPlusFill size={"1.5em"} color="gray" />
          ) : (
            <BsFillCartDashFill size={"1.5em"} color="darkorange" />
          )}
        </p>
        {/* <p>
              
              </p>  */}
      </div>
    </div>
  );
}
