import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Oops It looks like you are offline please check your internet connection</h1>

    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="search">
                    <input type="text" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="search" value={searchText}
                        onChange={
                            (e) => {
                                setSearchText(e.target.value)
                            }} />
                    <button type="button" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => {
                        const searchList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(searchList);
                    }}>Search</button>
                </div>
                <div className="flex items-center">
                    <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-2 py-2" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res?.info.avgRating > 4);
                        setFilteredList(filteredList);
                    }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="flex items-center">
                    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2 text-center ml-2"
                        onClick={() => {
                            setFilteredList(listOfRestaurants)
                        }}>Reset</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant?.map((restaurant) => (

                        <Link to={"/restaurants/" + restaurant.info.id} className="res-links">
                            <RestaurantCard key={restaurant.info.id} resData={restaurant}> </RestaurantCard>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;