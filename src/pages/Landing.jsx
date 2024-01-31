import CardCarousel from "../compoents/CardCarousel";
import RestaurantList from "../compoents/ResturantList";
import TopCarousel from "../compoents/TopCarousel";
import Places from "../compoents/Places";
import Cuisines from "../compoents/Cuisines";
import NearMe from "../compoents/NearMe";
import useApiCalls from "../utils/CustomHook/useApiCalls";
import { useSelector } from "react-redux";
import useCurrentLocation from "../utils/CustomHook/useCurrentLocation";


const Landing = () => {
    const location = useCurrentLocation();
    useApiCalls(location);
    const selector = useSelector(store => store.restroData.items)
    // console.log(selector)
    

    return (
        <>
            <TopCarousel data={selector}/>
            <CardCarousel data={selector}/>
            <RestaurantList data={selector}/>
            <Places />
            <Cuisines />
            <NearMe />
        </>
    )
}


export default Landing;