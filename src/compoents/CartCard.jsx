/* eslint-disable react/prop-types */
import { IMG_URL } from "../utils/Constatnt";
import VegNon from "./VegNon";

const CartCard = ({data}) => {
    return(
        <div className="flex justify-between h-40 mt-5 border-b-2 border-black">
            <div>
                {data?.isVeg === 1 ? <VegNon data={true}/> : <VegNon data={false} /> }
                <h1 className="font-semibold text-xl">{data?.name}</h1>
                <p className="font-semibold text-base">Rs - {data?.price ? data?.price / 100 : "100"}</p>
            </div>
            <div>
                <img src={IMG_URL + data?.imageId} alt="" className="w-36 h-28 rounded-md"/>
            </div>
        </div>
    )
};



export default CartCard;