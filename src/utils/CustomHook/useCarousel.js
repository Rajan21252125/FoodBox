import { useEffect, useState } from "react";

const useCarousel = (id) => {
        const [data,setData] = useState(null);
        const fetchData = async() => {
            try {
                // console.log(id)
                const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3061063&lng=72.8629943&collection=${id}&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
                if(!response) return console.log("Something went wrong!!")
                const json = await response.json();
                setData(json?.data?.cards);
            } catch (error) {
                console.error({"error":error})
            }
        }


        useEffect(() => {
            fetchData()
        },[])
        
        return data

}


export default useCarousel;