/* eslint-disable react/prop-types */
import { IMG_URL } from "../utils/Constatnt";
import VegNon from "./VegNon";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const TopPick = ({ data }) => {
  // data ? console.log(data) : console.log("no data");
  // console.log(title)


  const dispatch = useDispatch();
  const handleData = (cartList) => {
    dispatch(addToCart(cartList))
  }


  return (
    <div
      style={{ backgroundImage: `url(${IMG_URL}${data?.dish?.info?.imageId})` }}
      className="relative top-pick-item bg-cover bg-center bg-no-repeat p-4 rounded-xl "
    >   
    <div className="backdrop-blur-sm">
      <h1 className="text-black font-bold flex items-center"><VegNon data={data?.dish?.info?.isVeg} /> {data?.dish?.info?.name}</h1>
      <p className="text-black">{data?.dish?.info?.description}</p>
      </div>   
      <p className="absolute left-4 bottom-4 text-black font-semibold border-b-2 border-black">
        {data?.dish?.info?.price / 100}
      </p>
      <div className="absolute right-4 bottom-4 text-center">
        <button className="py-3 px-8 bg-white border border-black font-bold text-green-500 rounded-md" onClick={() => {handleData(data?.dish?.info)}}>
          ADD
        </button>
        <p className="text-[10px] text-white">Customisable</p>
      </div>
    </div>
  );
};

export default TopPick;
