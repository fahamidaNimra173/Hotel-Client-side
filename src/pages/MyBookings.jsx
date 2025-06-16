import React, { Suspense, useContext } from 'react';
import BookingsTable from '../Components/BookingsTable';
import { myBookingsPromise } from '../Api/api';
import { AuthContext } from '../AuthContext';

const MyBookings = () => {
    const {user}=useContext(AuthContext)
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-purple-800 text-center bg-purple-50  py-22'>Hi {user.displayName} , here are your all Booked rooms</h1>
            <Suspense fallback={<h1> data are coming</h1>}>
                <BookingsTable myBookingsPromise={myBookingsPromise(user.email)}></BookingsTable>
            </Suspense>
        </div>
    );
};

export default MyBookings;