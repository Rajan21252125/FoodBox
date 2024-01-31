import { useDispatch, useSelector } from "react-redux";
import CartCard from "../compoents/CartCard";
import { clearCart } from "../utils/cartSlice";
import cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const selector = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  //   console.log(selector);
  const prices = [];
  selector.map((price) => {
    prices.push(price?.price / 100);
  });

  const price = prices.reduce((acc, cur) => {
    return acc + cur;
  }, 0);


  const navigate = useNavigate();
  //   console.log(price);

  const handleAllItem = () => {
    dispatch(clearCart());
  };

  const handleOrder = () => {
    navigate("/thankyou")
  };

  return (
    <div className="mx-60 my-10">
      <div className="flex justify-between items-center">
        <p>Cart Items - ({selector.length})</p>
        <button
          className="px-4 py-2 rounded-lg bg-green-400 font-semibold text-base"
          onClick={() => handleAllItem()}
        >
          Clear Cart
        </button>
      </div>
      {selector.length === 0 ? (
        <div className="flex justify-center">
          <img src={cart} alt="" />
        </div>
      ) : (
        <div>
          {selector &&
            selector.map((data) => {
              return <CartCard key={data?.id} data={data} />;
            })}

          {selector.length === 0 ? (
            ""
          ) : (
            <div className="space-y-4">
              {" "}
              <h1 className="text-center my-4">Bill Details</h1>
              <div className="flex justify-between border-b-2 border-black pb-4">
                <div className="space-y-2">
                  <p>Item Total</p>
                  <p>Delivery Tip</p>
                  <p>Platform Fee</p>
                  <p>GST and Restaurant Charges</p>
                </div>
                <div className="space-y-2">
                  <p>₹ {price ? price : "100"}</p>
                  <p>₹ 20</p>
                  <p className="flex">
                    ₹<p className="line-through mx-1">20</p>4
                  </p>
                  <p>₹ 50</p>
                </div>
              </div>
              <div className="flex justify-between">
                <h1>To Pay </h1>
                <p>{price + 20 + 4 + 50}</p>
              </div>
              <button className="w-full bg-green-600 mt-5 py-2 px-4 rounded-md font-semibold text-white hover:bg-green-500" onClick={handleOrder}>Proceed To Buy</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
