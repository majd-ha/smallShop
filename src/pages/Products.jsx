import React, { useState } from "react";
import Card from "../components/Card";

import Categories from "../components/Categories";
import Loader from "../components/Loader";
import { useFetchAll } from "../hooks/useFetchAll";
export default function Products({ cartItems, setCartItem }) {
  const [currentCategory, setCurrentCategory] = useState("All");
  const { isLoading, data, isError, error } = useFetchAll(currentCategory);

  if (isError) {
    throw Error(`Sorry , Error accured : ${error.message} `);
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-[95%] mx-auto my-5">
      <Categories
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />

      <div className="flex gap-2 flex-wrap mt-5 justify-center">
        {data.map((pro) => {
          return (
            <Card
              key={pro.id}
              pro={pro}
              setCartItem={setCartItem}
              cartItems={cartItems}
            />
          );
        })}
      </div>
    </div>
  );
}
