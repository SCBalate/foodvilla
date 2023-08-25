import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const RestaurentDetails = () => {
  const[allrestaurent, setAllRestaurent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.15667&lng=74.69668639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data?.json();
   
    setAllRestaurent(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
  };
  const restaurant = allrestaurent?.filter((restaurant) => restaurant?.id === id); 
  console.log("restaurents" + restaurant);

  if (!restaurant) {
    return <div>Restaurant not found.</div>;
  }
    
     

      return (
        <div>
        <h2>Details Page</h2>
        <h3>{restaurant.name}</h3>
        <p>ID: {restaurant.id}</p>
        <p>Address: {restaurant.address}</p>
        {/* Display other restaurant details */}
      </div>
      );
      
}

export default RestaurentDetails