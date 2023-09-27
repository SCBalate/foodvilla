
import {useEffect, useState} from 'react';



const useRestaurentMenu = () => {
    const[allrestaurent, setAllRestaurent] = useState([]);
  
  
    
    useEffect(() => {
      fetchData();
    } , []);
  
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=456986&catalog_qa=undefined&submitAction=ENTER");
      const json = await data?.json();
      // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setAllRestaurent(json?.data?.cards?.card?.card?.info);
      console.log(allrestaurent)
    };
  return allrestaurent;
}

export default useRestaurentMenu