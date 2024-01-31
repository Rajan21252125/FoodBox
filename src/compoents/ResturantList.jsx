/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/CustomHook/useOnline";

const RestaurantList = ({data}) => {
  const [restroData, setRestroData] = useState([]);

  
  const fetchData = () => {setRestroData(
    data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )};

  useEffect(() => {
    fetchData()
  })


  const isOnline = useOnline();
  // console.log(isOnline)
  if (!isOnline) {
    return <div className="container mt-5 absolute bottom-0 left-0">You are currently offline.</div>;
  }


  return (
    <>
      {!restroData  ? (
        <Shimmer number={6} style={"mx-52"}/>
      ) : (
        <div className="py-8 mx-8 sm:mx-14 md:mx-28 lg:mx-40  xl:mx-60">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            Restaurants with online food delivery in Mumbai
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {restroData && restroData.map((data) => (
              <Link key={data?.info?.id} to={`/restro/${data?.info?.id}`}>
                <Card data={data?.info} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantList;
