import React from 'react'
import{IMGURL} from"../Utility/constants"
import "./RestaurantCard.css"
import { Link,useNavigate } from 'react-router-dom'



function RestaurantCard({data}) {
  const{name,cloudinaryImageId,cuisines,avgRating, avgRatingString, id} = data


  const navigate = useNavigate();
  
  const handleCardClick = () => {
    
    navigate(`/restaurant/${id}`); // Navigate to the details page
  };
  return (
    <>
    
    <Link to={`/restaurant/${id}`}>
    <div className="card " onClick={() => handleCardClick(id)}>
    <div className=" w-52  h-80 p-2 m-2  bg-neutral-100 hover:bg-neutral-200 hover:border border-neutral-300 rounded-lg">
        <img src= {IMGURL + cloudinaryImageId} alt={name} className=' w-100% rounded-lg'/>
        <h3 className="h-3 font-bold my-2">{name}</h3> 
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{avgRating || avgRatingString} stars</h4>
        {/* <h4>{lastMileTravelString} km</h4> */}
        
    </div>
    </div>
    </Link>

    </>
  )
}


export const withPromotedLabel =(RestaurantCard)=>{
return (props) =>{
  return(
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props}/>
    </div>
  )
}
}

export default RestaurantCard