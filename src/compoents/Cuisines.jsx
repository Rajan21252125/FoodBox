import { useState, useEffect } from "react";
import { API_URL } from "../utils/Constatnt";
import { Link } from "react-router-dom";

const Places = () => {
    const [datas, setDatas] = useState([]);
    const [title, setTitle] = useState("");
    const [itemsToShow, setItemsToShow] = useState(12); // Initial number of items to show

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();
            setDatas(json?.data?.cards[7]?.card?.card?.brands);
            setTitle(json?.data?.cards[7]?.card?.card?.title);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleMoreData = () => {
        // Increment the count of items to show
        setItemsToShow((prev) => prev + datas.length); // You can adjust the number based on your requirement
    };

    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28  xl:mx-40 my-12">
            <h1 className="font-bold text-lg md:text-xl xl:text-2xl">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
                {datas &&
                    datas.slice(0, itemsToShow).map((data) => {
                        return (
                            <div className="px-6 py-3 border-2 border-gray rounded-md text-center" key={data?.link}>
                                <Link to={data?.link}><h2>{data?.text}</h2></Link>
                            </div>
                        );
                    })}
                {itemsToShow < datas?.length && (
                    <button className="px-6 py-3 border-2 border-gray rounded-md font-bold" onClick={handleMoreData}>
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Places;
