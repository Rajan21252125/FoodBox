/* eslint-disable react/prop-types */
import { useState } from "react";
import { IMG_URL } from "../utils/Constatnt";
import VegNon from "./VegNon";
import { addToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import CartPopup from "../popups/CartPopup";

const RecipeDetail = ({ data }) => {
  const dispatch = useDispatch();
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleCart = (cartList) => {
    dispatch(addToCart(cartList));
    setShowCartPopup(true);

    // Automatically hide the CartPopup after 2 seconds
    setTimeout(() => {
      setShowCartPopup(false);
    }, 2000);
  };

  return (
    <div className="flex border-b border-1 p-8 border-black">
      <div className="w-[80%] flex flex-col justify-evenly">
        <div className="flex">
          <VegNon data={data?.card?.info?.isVeg} />{" "}
          <p className="mx-2">{data?.card?.info?.ribbon?.text}</p>
        </div>
        <p className="font-semibold text-lg">{data?.card?.info?.name}</p>
        <p>
          ₹{" "}
          {data?.card?.info?.price
            ? data?.card?.info?.price / 100
            : data?.card?.info?.defaultPrice / 100}
        </p>
        <p className="text-sm text-gray-500">
          {data?.card?.info?.description}
        </p>
      </div>
      <div>
        <div className="relative">
          {data?.card?.info?.imageId ? (
            <img
              src={`${IMG_URL}${data?.card?.info?.imageId}`}
              alt=""
              className="h-36 w-48 border rounded-xl"
            />
          ) : (
            <div className="h-20 w-44 border-2 border-black rounded-xl grid place-items-center">
              No image available
            </div>
          )}
          <button
            className="absolute -bottom-2 left-14 font-bold text-lg text-white bg-green-600 shadow-xl hover:bg-green-500 px-2 py-1 rounded-md"
            onClick={() => handleCart(data?.card?.info)}
          >
            Add
          </button>
        </div>
      </div>

      {/* Conditionally render CartPopup based on showCartPopup state */}
      {showCartPopup ? <CartPopup /> : ""}
    </div>
  );
};

export default RecipeDetail;
