import React from 'react'
import{IMGURL} from"./Utility/constants"
import "./RestaurantCard.css"


function RestaurantCard({data}) {
  const{name,cloudinaryImageId,cuisines,avgRating,lastMileTravelString} = data?.data
  return (
    <div className="res-card">
        <img src= {IMGURL + cloudinaryImageId} alt="res.name" className='res-logo'/>
        <h3>{name}</h3>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{lastMileTravelString}</h4>
        
    </div>
  )
}

export default RestaurantCard