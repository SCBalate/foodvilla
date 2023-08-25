import React from 'react'
import{IMGURL} from"../Utility/constants"
import "./RestaurantCard.css"
import { Link,useNavigate } from 'react-router-dom'



function RestaurantCard({data}) {
  const{name,cloudinaryImageId,cuisines,avgRating,lastMileTravelString, avgRatingString, id} = data


  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/restaurant/${id}`); // Navigate to the details page
  };
  return (
    <>
    <Link to={`/restaurant/${id}`}>
    <div className="card" onClick={() => handleCardClick(id)}>
    <div className="res-card">
        <img src= {IMGURL + cloudinaryImageId} alt={name} className='res-logo'/>
        <h3>{name}</h3>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{avgRating || avgRatingString} stars</h4>
        <h4>{lastMileTravelString}</h4>
        
    </div>
    </div>
    </Link>
    {/* <RestaurentDetails data={data}/> */}
    </>
  )
}

export default RestaurantCard