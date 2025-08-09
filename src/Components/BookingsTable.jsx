import React, { use, useState } from 'react';
import BookingsTableRow from './BookingsTableRows/BookingsTableRow';

const BookingsTable = ({myBookingsPromise}) => {
    const myBookings=use(myBookingsPromise)
    const [myBooking,setMyBookings]=useState(myBookings)
    return (
      <div>
        {myBooking.length>0?     <div className="overflow-x-auto">
  <table className="table table-xs ">
    <thead>
      <tr>
        <th className='text-[23px] text-black'>NO.</th>
        <th className='text-[23px] text-black'>Name</th>
        <th className='text-[23px] text-black'>Bed Type</th>
       
        <th className='text-[23px] text-black'>Booking Date</th>
        <th className='text-[23px] text-black'>Price</th>
      </tr>
    </thead>
    <tbody >
 
      
       {
        myBooking.map((Booking,index)=><BookingsTableRow index={index}
        myBooking={myBooking} setMyBookings={setMyBookings} Booking={Booking} ></BookingsTableRow>)
      }
  
 
    </tbody>
   
  </table>
</div> :<h1 className='text-3xl text-center text-purple-700 font-bold my-30'>You have not Booked Any Room Yet</h1>}
      </div>
  

         
    );
};

export default BookingsTable;