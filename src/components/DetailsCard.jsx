import React from "react";
import { BsFillCartXFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
export default function DetailsCard({ product, incart }) {
  const dispatch = useDispatch();
  const starsLength = product?.rating?.rate;
  const stars = [1, 2, 3, 4, 5, 6, 78, 9, 10];
  if (starsLength % 1 != 0) {
    stars.length = parseInt(starsLength + 1);
  } else {
    stars.length = parseInt(starsLength);
  }

  return (
    <div className="border py-3 mt-2 max-w-screen ">
      {incart && (
        <p
          onClick={() => dispatch(removeItem(product.id))}
          className="w-fit px-3 py-1 float-left"
        >
          <BsFillCartXFill size={"2rem"} color="gray" />
        </p>
      )}
      <div className="flex gap-3 max-sm:flex-col-reverse items-center min-h-[250px] w-[90%] mx-auto">
        <div>
          <p className="font-bold my-3 max-sm:text-center"> {product?.title}</p>
          <p className="shadow-inner p-2 italic w-[70%] max-sm:w-[90%] break-words h-[60%] overflow-hidden">
            {product?.description}
          </p>
          <div className="my-1 font-bold flex gap-2 items-center">
            Rate :{" "}
            {stars.map((el, i) => {
              if (i == stars.length - 1 && starsLength % 1 != 0) {
                return <BsStarHalf color="#A38A00" size={"1.5rem"} key={el} />;
              } else {
                return <BsStarFill size={"1.5rem"} color="#A38A00" key={el} />;
              }
            })}{" "}
            {`(${product?.rating?.rate})`}
          </div>
          <p className="my-1 font-bold">Stock : {product?.rating?.count}</p>
        </div>

        <img
          src={product?.image}
          alt="vv"
          className=" object-contain overflow-x-hidden h-[90%] rounded-lg aspect-3/2 mr-3 max-sm:mr-0 max-sm:w-[80%]"
        />
      </div>

      <p className="w-full p-4 text-green-600 text-center text-2xl">
        {product?.price}$
      </p>
    </div>
  );
}
