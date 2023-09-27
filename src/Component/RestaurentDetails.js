
import { useParams } from 'react-router-dom';
import{IMGURL} from"../Utility/constants"
import "../App.css"
import useRestaurentMenu from '../Utility/useRestaurentMenu';

const RestaurentDetails = () => {
 
  const { id } = useParams();

  
 

  const allrestaurent = useRestaurentMenu(id);

  const restaurant = allrestaurent?.find((restaurant) => restaurant?.id.toString() === id); 
  console.log("restaurents" + restaurant);


  if (!restaurant || restaurant.length === 0) {
    return <div>Restaurant not found.</div>;
  }
    
     

      return (
        <div className='flex justify-center align-middle mt-8'>   
        <div className='details-image-container rounded-xl'>
        <img src= {IMGURL + restaurant?.cloudinaryImageId} alt={restaurant?.name} className='rounded-xl'/> 
        </div>
        <div className='details-data'>
        <h2>Details Page</h2>
        <h3 className=" text-lg">{ restaurant?.name}</h3>
        <p className=' text-slate-400'> {restaurant?.cuisines}</p>
        <p  className=' text-slate-400'> {restaurant?.areaName}</p> 
        </div>
      </div>
      );
      
}

export default RestaurentDetails