import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import ProductsLayout from "./layoutes/ProductsLayout";
import RootLayout from "./layoutes/RootLayout";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Offers from "./pages/Offers";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {
  const querClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsLayout />}>
          <Route index element={<Products />} />
          <Route path=":productid" element={<ProductDetails />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="offers" element={<Offers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={querClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
