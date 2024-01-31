/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer/Shimmer";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardCarousel = ({data}) => {
    const [ datas,setDatas ] = useState([]);
    const [ title,setTitle ] = useState("");
    


    const fetchData = () => {
            setDatas(data[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setTitle(data[1]?.card?.card?.header?.title)
    }


    useEffect(() => {
        fetchData()
    })
    return(
        <div className="mt-8 mx-8 sm:mx-14 md:mx-28 lg:mx-40  xl:mx-60">
            <p className="text-base md:text-xl xl:text-2xl font-bold">{title}</p>
            {!datas ? <Shimmer number={4} style={"mx-0"}/> : <div className="flex overflow-x-auto gap-4 mt-8 scrollbar-thin scrollbar-webkit">
            { datas && datas.map((data) => {
                return(
                    <Link key={data?.info?.id} to={`/restro/${data?.info?.id}`}> 
                    <Card data={data?.info}/>
                    </Link>
                )
            })}
            </div>}
        </div>
    )
};


export default CardCarousel;