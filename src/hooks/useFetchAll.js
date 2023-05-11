import axios from "axios";
import { useQuery } from "react-query";

export const useFetchAll = (cat) => {
  const fetcher = () => {
    return axios.get("https://fakestoreapi.com/products", {
      withCredentials: false,
    });
  };
  return useQuery("products", fetcher, {
    select: (data) => {
      if (cat == "All") {
        return data.data;
      } else {
        const filterdData = data.data.filter((el) => el.category == cat);
        return filterdData;
      }
    },
  });
};
