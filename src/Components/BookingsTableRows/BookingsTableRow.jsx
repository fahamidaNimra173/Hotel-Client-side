import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthContext';
import { Rating } from 'react-simple-star-rating';
import StarRatings from 'react-star-ratings';

const BookingsTableRow = ({ index, Booking }) => {
  const { user } = useContext(AuthContext)
  const { roomId, name, price, bedType, location, date } = Booking;
  const [newDate, setNewDate] = useState(date);
  const [ratings, setRatings] = useState(0)


  const modalId = `modal_${roomId}`;
  const reviewModalId = `review_modal_${roomId}`

  const handleUpdate = (e) => {
    e.preventDefault();
    document.getElementById(modalId).showModal();
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const updatedDate = e.target.updatedDate.value;

    axios.put(`http://localhost:5000/bookings/${roomId}`, {
      date: updatedDate,
    })
      .then((res) => {
        if (res.data.matchedCount) {
          setNewDate(updatedDate);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'New date has been updated',
            showConfirmButton: false,
            timer: 1500,
          });
          document.getElementById(modalId).close();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleReview = e => {
    console.log('something')
    e.preventDefault()
    document.getElementById(reviewModalId).showModal()
    // const comment=e.target.comment.value
    // console.log(comment)
    // console.log('this is me',ratings)

  }
  const handleReviewPost = e => {
    e.preventDefault()

    const comment = e.target.comment.value
    console.log(comment)
    const time = Date.now(); // This would be the timestamp you want to format

    const timestamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time);
    console.log('time', timestamp, time)
    console.log('this is me', ratings)
    const review = {
      userImage:user.photoURL,
      username: user.displayName,
      ratings,
      comment,
      timestamp,
      roomId

    }
    axios.post(`http://localhost:5000/reviews`, review).then(res => {
      console.log(res.data)
      if(res.data.insertedId){
      Swal.fire({
        title: "Thanks for Sharing Your Thoughts – Your Review is Now Live!",
          timer: 3000,
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
        }
      })
    };
    }).catch(error => console.log(error))
    document.getElementById(reviewModalId).close();
  }


  return (
    <tr className='bg-amber-50 text-black border-b-2 border-black'>
      <th className='text-[20px]'>{index + 1}</th>
      <td className='text-[20px]'>{name}</td>
      <td className='text-[20px]'>{bedType}</td>
      <td className='text-[20px]'>{location}</td>

      <td className='text-[20px]'>
        {newDate}
        <button onClick={handleUpdate} className='btn mx-2 btn-primary'>
          Update Date
        </button>


        <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
          <div className='modal-box bg-white'>
            <div className='text-start'>
              <button onClick={() => document.getElementById(modalId).close()} className='btn'>
                X
              </button>
            </div>
            <h3 className='font-bold text-lg text-center'>Update Your Booking Date!</h3>
            <form onSubmit={handleConfirm} className='flex flex-col'>
              <input
                type='date'
                name='updatedDate'
                className='input mb-9 mx-auto mt-8 bg-pink-300 text-black'
                required
              />
              <div className='modal-action'>
                <button type='submit' className='btn'>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </td>

      <td className='text-[20px]'>{price}</td>

      <td className='text-[20px] flex flex-col gap-2'>
        <div>
          <button onClick={handleReview} className='btn btn-primary'>Give Review</button>
          <dialog id={reviewModalId} className="modal modal-bottom sm:modal-middle">
            <div className='modal-box bg-white'>
              <div className='text-start mb-9'>
                <button onClick={() => { document.getElementById(reviewModalId).close() }} className='btn'>
                  X
                </button>
              </div>
              <h3 className='font-bold text-lg text-center'> Dear {user.displayName} Give Your Valuable Review </h3>
              <form onSubmit={handleReviewPost} className='flex flex-col gap-4 mt-4 justify-center items-center'>
                <div className='flex flex-col items-center'>
                  <label className='text-lg font-medium'>Your Rating:</label>
                  <StarRatings
                    rating={ratings}
                    starRatedColor='purple'
                    starHoverColor=' gold'
                    changeRating={setRatings}
                    numberOfStars={5}
                    name='rating'
                    starDimension='30px'
                    starSpacing='5px'
                  />
                </div>

                <textarea
                  name='comment'
                  placeholder='Write your feedback here...'
                  className='textarea textarea-info text-white text-[15px]'
                ></textarea>

                <div className='modal-action'>
                  <button type='submit' className='btn'>
                    Post Review
                  </button>
                </div>
              </form>
            </div>
          </dialog>

        </div>

        <button className='btn btn-primary'>Cancel Review</button>
      </td>
    </tr>
  );
};

export default BookingsTableRow;
