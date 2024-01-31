import { useState, useEffect } from "react";
import { API_URL } from "../utils/Constatnt";
import { Link } from "react-router-dom";

const Places = () => {
    const [datas, setDatas] = useState([]);
    const [title, setTitle] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();
            setDatas(json?.data?.cards[8]?.card?.card?.brands);
            setTitle(json?.data?.cards[8]?.card?.card?.title);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28  xl:mx-40 my-12">
            <h1 className="font-bold text-lg md:text-xl xl:text-2xl">{title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
                {datas &&
                    datas.map((data) => {
                        return (
                            <div className="px-6 py-3 border-2 border-gray rounded-md text-center" key={data?.link}>
                                <Link to={data?.link}><h2>{data?.text}</h2></Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Places;
