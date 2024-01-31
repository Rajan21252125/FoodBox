import { useParams } from "react-router-dom";
import TopPick from "./TopPick";
import useRestroDetails from "../utils/CustomHook/useRestroDetails";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import RecipeDetail from "./recipeDetail";
import { IoBicycleSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Shimmer from "./Shimmer/Shimmer";

const RestroDetail = () => {
  const { id } = useParams();

  const { restroData, foodList, topPick, topTitle } = useRestroDetails(id);
  const [openCategories, setOpenCategories] = useState({});

  

  const toggleCategory = (title) => {
    setOpenCategories((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
    {foodList?.length === 0  ? <Shimmer number={9} style={"mx-40"}/> : <div>
      <div className="border-1 border-b border-gray-600 mx-4 mt-4 sm:mx-14 md:mx-28 lg:mx-40  xl:mx-60 flex justify-between lg:mt-10 items-center">
        <div className="my-6">
          <h1 className="font-bold  xl:text-xl">{restroData?.name}</h1>
          <p className="text-sm xl:text-base text-gray-500 mt-3">{restroData?.cuisines?.join(", ")}</p>
          <p className="text-sm xl:text-base text-gray-500 mb-3">{restroData?.areaName}</p>
          <p className="flex items-center text-sm lg:text-base text-gray-500"><IoBicycleSharp /> {restroData?.feeDetails?.message}</p>
        </div>
        <div className="border border-gray-400 rounded-md px-4 py-2 flex flex-col justify-centers">
          <p className="flex items-center pb-1 justify-center border-b border-black font-bold text-green-800"><CiStar />{restroData?.avgRating}</p>
          <p className="text-sm tracking-tighter mt-1">{restroData?.totalRatingsString}</p>
        </div>
      </div>
      {topPick ? (
        <h1 className="mx-64 text-center mt-8 font-bold text-2xl">
          {topTitle}
        </h1>
      ) : (
        ""
      )}
      {topPick ? (
        <div className="flex space-x-3 h-[55vh] mt-8 pb-4 mx-64 top-pick-carousel scrollbar-thin scrollbar-webkit">
          {topPick.map((data) => {
            return <TopPick key={data?.info?.id} data={data} />;
          })}
        </div>
      ) : (
        ""
      )}
      <div className="space-y-2 flex flex-col justify-center items-center">
        {foodList?.map((data) => {
          const restroData = data?.card?.card?.itemCards;
          const categoryTitle = data?.card?.card?.title;

          return (
            <div key={categoryTitle} className="w-[66%]">
              {restroData?.length > 1 && categoryTitle && (
                <div className="flex justify-between items-center pb-2 mt-4 border-b-2 border-gray-600">
                  <h1 className="font-semibold text-xl">
                    {categoryTitle} ({restroData?.length - 1})
                  </h1>
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleCategory(categoryTitle)}
                  >
                    {openCategories[categoryTitle] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                </div>
              )}

              {openCategories[categoryTitle] &&
                restroData &&
                restroData.slice(1).map((food) => (
                  <RecipeDetail key={food?.card?.info.id} data={food}/>
                ))}
            </div>
          );
        })}
      </div>
    </div>}
    </>
  );
};

export default RestroDetail;
