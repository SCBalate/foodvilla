import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Simmer from '../ShimmerUI';



function Body() {
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [allFilerRestaurent, setAllFilerRestaurent] = useState([]);
   const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.15667&lng=74.69668639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data?.json();
   
    setAllRestaurent(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllFilerRestaurent(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const filterTopRatedRestaurents = () => {
    debugger
    const filteredRestaurants = allRestaurent.filter((restaurant) => restaurant?.info?.avgRating >= 4.0);
    setAllFilerRestaurent(filteredRestaurants);
  }
  console.log(allRestaurent?.info?.id)
  return allRestaurent?.length === 0 ? (<Simmer/>) : (
    
    <div className='body' style={{margin: "5px 10px"}}>
    <div style={{display:"flex", justifyContent:"space-between"}}>
<button onClick={filterTopRatedRestaurents}>Top Rated Restaurents</button>
      <div className='search'>
        <input type="text" className="searchBox" placeholder='Search...' value={searchText} onChange={(e)=>{

          setSearchText(e.target.value)
          const filterdRes = allRestaurent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
          setAllFilerRestaurent(filterdRes);
          
        
        }}/>
      
      </div>
      </div>
      <div className="res-container" style={{ padding: "10px", display: "flex", flexWrap: "wrap" }}>
      {allFilerRestaurent?.map((x) => (<RestaurantCard key={x?.info?.id} data={x?.info} />))}
      </div>
    </div>
  );
}

export default Body;
