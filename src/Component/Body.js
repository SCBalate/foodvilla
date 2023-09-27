import React, { useState, useEffect } from 'react';
import RestaurantCard,{withPromotedLabel} from './RestaurantCard';
import Simmer from '../ShimmerUI';
import useOnlineStatus from '../Utility/useOnlineStatus';
import { Link } from 'react-router-dom';


function Body() {
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [allFilerRestaurent, setAllFilerRestaurent] = useState([]);
   const [searchText, setSearchText] = useState("");

const RestaurentCardPromoted = withPromotedLabel("RestaurantCard");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data?.json();
   
    setAllRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllFilerRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const filterTopRatedRestaurents = () => {
    debugger
    const filteredRestaurants = allRestaurent.filter((restaurant) => restaurant?.info?.avgRating >= 4.0);
    setAllFilerRestaurent(filteredRestaurants);
  }
  console.log(allRestaurent?.info?.id)

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return(
      <h1>
        Looks like you are offline , please check your internet connection !!!
      </h1>
    )
  }

  return allRestaurent?.length === 0 ? (<Simmer/>) : (
    
    <div className='body mx-2 my-1' >
    <div className="flex justify-between">
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
      {allFilerRestaurent?.map((x) => (<Link key={x?.info?.id} >{x.promoted ? (<RestaurentCardPromoted data={x?.info}/>): (<RestaurantCard data={x?.info}/>)}</Link>))}
      </div>
    </div>
  );
}  

export default Body;
