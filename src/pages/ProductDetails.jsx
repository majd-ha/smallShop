import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Crumbs from "../components/Crumbs";
import DetailsCard from "../components/DetailsCard";
import Loader from "../components/Loader";

export default function ProductDetails() {
  const { productid } = useParams();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery(
    ["single-product", productid],
    () => {
      return axios.get(`https://fakestoreapi.com/products/${productid}`);
    },
    {
      initialData: () => {
        const product = queryClient.data
          ?.getQueryData("products")
          ?.find((el) => el.id == productid);
        if (product) {
          return {
            data: product,
          };
        } else {
          return undefined;
        }
      },
    }
  );
  if (data?.data == "") {
    throw Error("not such a product ");
  }
  if (isError) {
    throw Error(`${error.message}`);
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-[90%] mx-auto">
      <Crumbs />
      <DetailsCard product={data.data} incart={false} />
    </div>
  );
}
