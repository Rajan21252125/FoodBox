import { useEffect, useState } from "react";



const useRestroDetails = (id) => {
  const [restroData, setRestroData] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [topTitle, setTopTitle] = useState("");
  const [topPick, setTopPick] = useState([]);



  const fetchData = async () => {
    let response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.3061063&lng=72.8629943&restaurantId=${id}`
    );
    const jsonData = await response.json();
    setRestroData(jsonData?.data?.cards[0]?.card?.card?.info);
    setTopPick(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
    setTopTitle(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title);
    // console.log(topTitle)
    setFoodList(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  };

  useEffect(() => {
    fetchData();
  }, []);



  return {restroData,foodList,topPick,topTitle}
}


export default useRestroDetails