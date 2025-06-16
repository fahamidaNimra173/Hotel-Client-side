import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate, } from 'react-router';
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';

const RoomDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const Location = useLocation()
    const { roomId, name, description, price, location, image, bedType, rating } = useLoaderData()
    const [reviews, setReviews] = useState([]);
    const [available,setAvailable]=useState(true)
    // const [booking,setBooking]=useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/reviews').then(res => {
            console.log(res.data.roomId)
            const review = res.data.filter(review => review.roomId == roomId)
            setReviews(review)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleBooking = e => {
        e.preventDefault();
        if (user) {

            document.getElementById('my_modal_4').showModal()
            //  setBooking(true)

            // hhh

        }
        else { navigate('/login', { state: { from: Location.pathname } }) }


    }

    const handleConfirm = e => {
        e.preventDefault();
        const date = e.target.date.value
        console.log(date)
        const bookings = {
            userEmail: user.email,
            roomId,
            name,
            description,
            date,
            price,
            location,
            image,
            bedType,
            rating

        }
        console.log(bookings)
        axios.post('http://localhost:5000/bookings', bookings).then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    title: "You have successfully Booked this Room!",
                    icon: "success",
                    draggable: true
                    
                });
            }
        }).catch(error => {
            console.log(error)
        })
        // update available status
        axios.put(`http://localhost:5000/hotels/${roomId}`,{
            availability:false
        }).then(res => {
            console.log(res.data)
            
        }).catch(error => {
            console.log(error)
        })
        setAvailable(false)
    }

    return (
        <div >

            <div className='my-9 mx-6 bg-amber-100 text-black p-4 rounded-2xl'>
                <div><img src={image} alt="" /></div>
                <div className=' text-center space-y-2 mt-12'>
                    <h1 className='text-3xl'>{name}</h1>
                    <p className='text-[20px]'>{description}</p>
                    <h4>PRICE: {price}</h4>
                    <h5>Ratings: {rating}</h5>
                    <h4>{location}</h4>
                    <h2>{bedType}</h2>
                    <div className='bg-blue-100 text-black px-7 py-16 border-2'>
                        {
                            !reviews.length == 0 ? reviews.map(reviewDetails => <div>
                                <h1>{reviewDetails.username}</h1>
                                <h1>{reviewDetails.rating}</h1>
                                <p>{reviewDetails.comment}</p>
                                <h5>{reviewDetails.timestamp}</h5>


                            </div>) : <div><h1>There are no reviews for this room</h1></div>
                        }
                        <div className="card-actions justify-end my-7">
                            <button className="btn btn-primary">Give Review</button>
                        </div>
                    </div>
                    <div className="card-actions justify-center my-7">

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-primary" onClick={handleBooking}>Book Now</button>

                        {available === true ? 
                        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-white">
                                <div className=' text-end'>
                                   <button onClick={() => document.getElementById('my_modal_4').close()}  className="btn justify-end ">X</button> 
                                </div>
                                  
                                <h3 className="font-bold text-lg">{name}</h3>
                                {available === true ? <h1>Available</h1> : <h1>Not Available</h1>
                                }
                                <p className="py-4">{description}</p>
                                <div className='flex mx-auto gap-5 justify-center'>
                                    <h3 className='bg-pink-400 text-[16px] font-bold rounded-2xl px-12 py-3'>{price} BDT</h3>
                                    <h3 className='bg-pink-400 text-[16px] font-bold rounded-2xl px-12 py-3'>{bedType}</h3>
                                </div>
                                <h1 className='mt-9 mb-3 '>please give your booking date</h1>
                                <form onSubmit={handleConfirm} >
                                    <input type="date" name='date' className="input mb-9 bg-pink-300 text-black" />



                                    <div className="modal-action  justify-center">

                                        {/* if there is a button, it will close the modal */}
                                      

                                        <button onClick={() => document.getElementById('my_modal_4').close()} type='submit' className="btn">Confirm</button>
                                    </div>
                                </form>

                            </div>
                        </dialog> : <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-white">
                                <h3 className="font-bold text-lg">This room is already booked!</h3>

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;