import React, { useEffect, useState } from 'react';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrders = () => {
     
    const[bookings,setBookings] = useState([]);
  
   useEffect( ()=>{
       fetch('https://guarded-bayou-50166.herokuapp.com/booking')
        .then(res =>res.json())
         .then(data => setBookings(data))
   } ,[]);

 console.log(bookings);

    return (
        <div>
            <h1>  All Orders </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                             <th></th>
                            <th> Name </th>
                            <th> customer </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            bookings?.map((booking,index )=><ManageOrderRow
                               key={booking._id}
                                booking={booking}
                                index={index}

                            ></ManageOrderRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;