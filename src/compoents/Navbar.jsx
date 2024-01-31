import { Link } from "react-router-dom";
import useOnline from "../utils/CustomHook/useOnline";
import { useSelector } from "react-redux";
import { FaHome , FaHandsHelping , FaGithub , FaShoppingCart , FaBars } from "react-icons/fa";
import { useState } from "react";



const Navbar = () => {
  const [show , setShow ] = useState(false);
  const isOnline = useOnline();
  const selector = useSelector(state => state.cart.items)
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className='flex justify-between items-center py-4 px-8 sm:px-14 shadow-lg'>
      <div className=''>
        <Link to={"/"}><p className='font-bold text-2xl'>FoodBox</p></Link>
      </div>
      <div>
        <li className='hidden space-x-6 md:flex'>
            <ul className="font-semibold cursor-pointer hover:text-orange-400 transition-all">{isOnline ? "Online : 📗" : "Offline : 📕"}</ul>
            <ul className='font-semibold cursor-pointer hover:text-orange-400 transition-all flex items-center'><Link to={"/"}>Home</Link> <FaHome className="ml-2"/></ul>
            <ul className='font-semibold cursor-pointer hover:text-orange-400 transition-all flex items-center'>Help <FaHandsHelping className="ml-2"/></ul>
            <ul className='font-semibold cursor-pointer hover:text-orange-400 transition-all flex items-center'><Link to={"/cart"}>Cart - {selector.length}</Link> <FaShoppingCart className="ml-2"/> </ul>
            <ul className='font-semibold cursor-pointer hover:text-orange-400  flex items-center justify-between'><Link to={"https://github.com/Rajan21252125/FoodBox.git"} className="flex items-center">GitHub <FaGithub className="ml-2"/></Link></ul>
        </li>
        <div className="relative block md:hidden">
          <p className="font-semibold cursor-pointer flex items-center hover:text-orange-400 transition-all">{isOnline ? "Online : 📗" : "Offline : 📕"}<FaBars className="ml-4" onClick={toggleShow}/> </p>
          <li className={`flex flex-col justify-center absolute top-10 bg-gray-300 ${show ? "block" : "hidden"} px-8 py-4 rounded-lg right-0 w-40 md:hidden`}>
            <ul className='font-semibold cursor-pointer hover:text-orange-400  flex items-center justify-between'><Link to={"/"}>Home</Link> <FaHome className="ml-2"/></ul>
            <ul className='font-semibold cursor-pointer hover:text-orange-400  flex items-center justify-between'>Help <FaHandsHelping className="ml-2"/></ul>
            <ul className='font-semibold cursor-pointer hover:text-orange-400  flex items-center justify-between'><Link to={"/cart"}>Cart - {selector.length}</Link> <FaShoppingCart className="ml-2"/> </ul>
            <ul className='font-semibold cursor-pointer hover:text-orange-400  flex items-center justify-between'><Link to={"https://github.com/Rajan21252125/FoodBox.git"} className="flex items-center">GitHub <FaGithub className="ml-2"/></Link></ul>
        </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
