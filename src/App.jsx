import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./compoents/Navbar";
import Landing from "./pages/Landing";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import RestroDetail from "./compoents/RestroDetail";
import NetworkError from "./compoents/NetworkError";
import CarouselData from "./compoents/CarouselData";
import { Provider } from "react-redux";
import store from '../src/utils/store';
import Cart from "./pages/Cart";
import Footer from "./compoents/Footer";
import AfterOrderPage from "./popups/AfterOrderPage";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restro/:id",
        element: <RestroDetail />,
      },
      {
        path: "/carousel/:id",
        element: <CarouselData />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/thankyou",
        element: <AfterOrderPage />
      }
    ],
  },
  {
    path: "/networkError",
    element: <NetworkError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
