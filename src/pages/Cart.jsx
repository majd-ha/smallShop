import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import DetailsCard from "../components/DetailsCard";
import { emptyCart } from "../redux/cartSlice";
export default function Cart() {
  const { items } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="p-1">
      <p className="my-8 text-orange-400 text-3xl text-center">Shopping Cart</p>
      {items.length > 0 ? (
        <div className="flex flex-col gap-10 ">
          <div
            onClick={() => dispatch(emptyCart())}
            className="px-4 py-2 bg-red-500 text-white w-fit rounded-xl cursor-pointer flex justify-evenly items-center gap-2"
          >
            <p> Empty Cart </p>
            <FaTrashAlt />
          </div>
          {items.map((item) => {
            return <DetailsCard key={item.id} product={item} incart={true} />;
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
