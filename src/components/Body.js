import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

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

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-container">
                <div className="search">
                    <input type="text" placeholder="search" value={searchText}
                        onChange={
                            (e) => {
                                setSearchText(e.target.value)
                            }} />
                    <button type="button" onClick={() => {
                        const searchList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(searchList);
                    }}>Search</button>
                </div>
                <div className="top-restaurants">
                    <button className="filter-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res?.info.avgRating > 4);
                        setFilteredList(filteredList);
                    }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="reset-filter">
                    <button className="reset-btn"
                        onClick={() => {
                            setFilteredList(listOfRestaurants)
                        }}>Reset</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (

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