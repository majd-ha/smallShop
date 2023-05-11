import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DetailsCard from "../components/DetailsCard";

export default function Cart({ cartItems }) {
  return (
    <div className="p-1">
      <p className="my-8 text-orange-400 text-3xl text-center">Shopping Cart</p>
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-10 ">
          {cartItems.map((item) => {
            return <DetailsCard key={item.id} product={item} />;
          })}
        </div>
      ) : (
        <div>
          <AiOutlineShoppingCart
            size={"8rem"}
            color={"gray"}
            className="mx-auto"
          />
          <p className="capitalize text-center">cart is empty </p>
        </div>
      )}
    </div>
  );
}
