/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { IMG_URL } from "../utils/Constatnt";
import { Link } from "react-router-dom";
import useStringFormat from "../utils/CustomHook/useStringFormat";
import TopShimmer from "./Shimmer/TopShimmer";

const TopCarousel = ({data}) => {
  const [title, setTitle] = useState("");
  const [carousel, setCarousel] = useState([]);

  const fetchData = () => {
      setTitle(data[0]?.card?.card?.header?.title);
      setCarousel(data[0]?.card?.card?.imageGridCards?.info);
    }

  useEffect(() => {
    fetchData();
  });


  

  return (
    <>
    {!carousel ? <TopShimmer /> : <div className="mx-8 sm:mx-14 md:mx-28 lg:mx-40  xl:mx-60 mt-5 lg:mt-10">
      <p className="font-bold text-lg md:text-xl xl:text-2xl">{title}</p>
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-webkit">
        {carousel &&
          carousel.map((data) => {
            return (
              <Link key={data?.id} to={`/carousel/${useStringFormat(data?.entityId)}`}>
                <img src={`${IMG_URL}${data?.imageId}`} alt="" className="min-w-28 lg:min-w-36 hover:scale-90 transition-transform"/>
              </Link>
            );
          })}
      </div>
    </div>
        }
    </>
  );
};

export default TopCarousel;
