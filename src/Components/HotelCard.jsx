import React from 'react';
import { Link } from 'react-router';

const HotelCard = ({hotel}) => {
    const {roomId,name,description,availability,image,rating}=hotel
  
    return (
        <div className="card bg-base-100 border-2 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{availability==true?<h1>Available</h1>:<h1>Not Available</h1>}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Ratings:{rating}</div>
                 
                </div>
            </div>
            <div className="card-actions justify-center py-5">
            <Link to={`/roomDetails/${roomId}`}><button  className="btn btn-primary">Book Now</button></Link>
            
    </div>
        </div>
    );
};

export default HotelCard;