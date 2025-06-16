import React, { use } from 'react';
import BookingsTableRow from './BookingsTableRows/BookingsTableRow';

const BookingsTable = ({myBookingsPromise}) => {
    const myBookings=use(myBookingsPromise)
    return (
       <div className="overflow-x-auto">
  <table className="table table-xs ">
    <thead>
      <tr>
        <th className='text-[23px] text-white'>NO.</th>
        <th className='text-[23px] text-white'>Name</th>
        <th className='text-[23px] text-white'>Bed Type</th>
        <th className='text-[23px] text-white'>location</th>
        <th className='text-[23px] text-white'>Booking Date</th>
        <th className='text-[23px] text-white'>Price</th>
      </tr>
    </thead>
    <tbody >
      
       {
        myBookings.map((Booking,index)=><BookingsTableRow index={index} Booking={Booking} ></BookingsTableRow>)
      }
  
 
    </tbody>
   
  </table>
</div>

         
    );
};

export default BookingsTable;