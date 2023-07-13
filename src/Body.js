import React from 'react'
import { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'




function Body() {
  
const[allRestaurent,setAllRestaurent] = useState([]);

useEffect=(()=>{
  fetchData();
 },[])
 
 const fetchData= async ()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.15667&lng=74.69668639999999&page_type=DESKTOP_WEB_LISTING")
 
   const json = await data.json();
 console.log(json)
   setAllRestaurent(json.data.cards[2].data.data.cards);
 
 
     };

  return (
    <div className='body'>
<div className='search'>Search</div>
<div className="res-container" style={{padding:"10px" ,display:"flex" , flexWrap:"wrap",}}>
  {allRestaurent.map((x)=> (<RestaurantCard key={x.data.id} data={x}/>))}


</div>
    </div>
  )
}

export default Body