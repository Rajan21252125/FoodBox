import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const ThankYouPage = () => {
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const handleHomePage = () => {
        dispatch(clearCart());
        navigate("/");
    }
  return (
    <div className="mx-auto my-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-lg">
        Your order has been successfully placed. We appreciate your business.
      </p>
      <p className="text-lg mt-4">
        If you have any questions or concerns, please contact our support team.
      </p>
      <button className="bg-green-600 mt-5 py-2 px-4 rounded-md font-semibold text-white hover:bg-green-500" onClick={handleHomePage}>Return to Home Page</button>
    </div>
  );
};

export default ThankYouPage;
