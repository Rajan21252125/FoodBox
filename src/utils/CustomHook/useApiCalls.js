import { useDispatch } from "react-redux";
// import { API_URL } from "./Constatnt";
import { setRestroData } from "../dataSlice";
import { useEffect, useState } from "react";

const useApiCalls = (location) => {
    const [ data,setData ] = useState(null);
    const lat = location.latitude 
    const lng = location.longitude 
    console.log(location.latitude)
    console.log(location.longitude)
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
          const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`);
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const jsonData = await response.json();
          // console.log(jsonData)
          // dispatch action to store data in redux
          dispatch(setRestroData(jsonData?.data?.cards));
          setData(jsonData)
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      },[]);
      
      return data
}


export default useApiCalls;