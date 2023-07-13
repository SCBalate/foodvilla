import React from 'react'
import "./RestaurantCard.css"
function RestaurantCard({data}) {
  return (
    <div className="res-card">
        <img src="" alt="res.name" className='res-logo'/>
        <h3>{data.name}</h3>
        <h4>res.cuisines</h4>
        <h4>res.ratings</h4>
        <h4>res.distance</h4>
        
    </div>
  )
}

export default RestaurantCard