import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./src/myShopiee/myStore/Index.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./src/myShopiee/pages/Cart.jsx";
import Home from "./src/myShopiee/pages/Home.jsx";
import WishList from "./src/myShopiee/pages/WishList.jsx";
import BuyNow from "./src/myShopiee/pages/BuyNow.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/buy-now",
        element: <BuyNow />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
