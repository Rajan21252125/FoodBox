import { IoFastFoodOutline } from "react-icons/io5";


const TopShimmer = () => {
    return(
        <div className="h-60 bg-gray-300 grid place-items-center animate-pulse">
            <div className="grid place-items-center">
                <div className="text-6xl text-gray-600 p-4 rounded-full">
                    <IoFastFoodOutline />
                </div>
                <div className="">
                    <h1 className="font-bold text-sm md:text-xl xl:text-2xl text-gray-600">Looking food Great Food Near you ......</h1>
                </div>
            </div>
        </div>
    )
}


export default TopShimmer