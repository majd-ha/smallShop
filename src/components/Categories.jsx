import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Categories({ setCurrentCategory, currentCategory }) {
  const { data: categories } = useQuery("categories", () => {
    return axios.get("https://fakestoreapi.com/products/categories");
  });
  return (
    <div className="flex gap-1 justify-center my-5 bg-gray-100  rounded-3xl select-none">
      <p
        onClick={() => setCurrentCategory("All")}
        className={` cursor-pointer text-center w-1/6 text-xl flex items-center justify-center   py-3 max-sm:text-xs overflow-hidden  ${
          currentCategory == "All"
            ? "text-orange-500 border-2 border-transparent border-b-orange-500"
            : ""
        } text-gray-400  `}
      >
        All
      </p>
      {categories?.data.map((cat) => {
        return (
          <p
            onClick={() => {
              setCurrentCategory(cat);
            }}
            key={cat}
            className={` cursor-pointer text-center w-1/6 text-xl  flex items-center justify-center py-3 max-sm:text-xs overflow-hidden  ${
              currentCategory == cat
                ? "text-orange-500 border-2 border-transparent border-b-orange-500"
                : ""
            } text-gray-400  `}
          >
            {cat}
          </p>
        );
      })}
    </div>
  );
}
