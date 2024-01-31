/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import useCarousel from "../utils/CustomHook/useCarousel";
import Card from "./card";
import Shimmer from "./Shimmer/Shimmer";
import useStringFormat from "../utils/CustomHook/useStringFormat";

const CarouselData = () => {
  const { id } = useParams();
  // console.log(id)
  let datas = useCarousel(id);
  // console.log(datas)
  let heading
  if (datas) {
    heading = datas[0]
    // console.log(heading)
    datas = datas.slice(2);
    // console.log(datas)
  }
  return (
    <>
      {!datas ? <Shimmer number={6} style={"mx-40"}/> : 
    <div className=" mt-14 mx-8 sm:mx-14 md:mx-28 lg:mx-40  xl:mx-60">
      <p className="text-3xl xl:text-4xl font-bold text-gray-600 ">{heading?.card?.card?.title}</p>
      <p className="text-base xl:text-lg mt-2 text-gray-600">{heading?.card?.card?.description}</p>
      <p className="mt-3 font-semibold text-xl xl:text-2xl text-gray-600">{datas ? "Restaurants to explore - " : ""} ({datas?.length}) </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {datas &&
          datas.map((data) => {
            // console.log(data?.card?.card?.cta?.link)
            return (
              <Link to={`/restro/${useStringFormat(data?.card?.card?.cta?.link)}`}
              key={data?.card?.card?.info?.id}>
              <Card
                data={data?.card?.card?.info}
              />
              </Link>
            );
          })}
      </div>
    </div>}
    </>
  );
};

export default CarouselData;
