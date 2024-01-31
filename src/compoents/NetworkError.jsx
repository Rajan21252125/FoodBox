/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import error from "../assets/error.png";


const NetworkError = () => {
    const navigate = useNavigate();
    const backPage = () => {
        navigate("/");
    }
  return (
    <div className="grid flex-col justify-center items-center h-[85vh] space-y-4">
        <img src={error} alt="" className="w-56"/>
        <h1 className="font-bold text-3xl">We'll be back shortly</h1>
        <p className="text-md text-gray-400">We are fixing a temporary glitch. Sorry for the inconvenience.</p>
        <button className="bg-orange-500 px-4 py-2 rounded-md font-bold text-white hover:shadow-lg" onClick={backPage}>Go Back</button>
    </div>
  )
}

export default NetworkError
