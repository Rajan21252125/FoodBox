/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import VegNon from './VegNon';

const Card = ({ data }) => {
    const newCuisines = (cuisine) => {
        let cuisineList
        if (Array.isArray(cuisine)) {
            cuisineList = cuisine.join(", ")
        } else {
            cuisineList = cuisine;
        }
        if (cuisineList?.length > 25){
            return `${cuisineList.slice(0, 24)}...`
        } else {
            return cuisineList;
        }
    }
    return (
        <div className='rounded-2xl overflow-hidden hover:scale-90 transition-transform cursor-pointer h-80 min-w-64'>
            <div className="relative">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.cloudinaryImageId}`} alt="" className='w-full object-center aspect-auto h-40 z-0 relative' />
            <p className='text-in-container'>{data?.aggregatedDiscountInfoV3?.header ? data?.aggregatedDiscountInfoV3?.header + " " + data?.aggregatedDiscountInfoV3?.subHeader : " "   }</p>
            </div>
            <div className='p-2'>
                <p className='text-lg font-semibold'>{newCuisines(data?.name)}</p>
                <p className='flex font-semibold space-x-2'>{<VegNon data={data?.veg}/>} - {data?.avgRating}⭐ . {data?.sla?.slaString}</p>
                <p>{newCuisines(data?.cuisines)}</p>
                <p className='font-semibold'>{data?.areaName}</p>
            </div>
        </div>
    );
};

export default Card;
