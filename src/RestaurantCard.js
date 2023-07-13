import React from 'react'
import{IMGURL} from"./Utility/constants"
import "./RestaurantCard.css"


function RestaurantCard({data}) {
  return (
    <div className="res-card">
        <img src= { data.data.cloudinaryImageId} alt="res.name" className='res-logo'/>
        <h3>{data.data.name}</h3>
        <h4>{data.data.cuisines}</h4>
        <h4>{data.data.avgRating} stars</h4>
        <h4>{data.data.lastMileTravelString}</h4>
        
    </div>
  )
}

export default RestaurantCard