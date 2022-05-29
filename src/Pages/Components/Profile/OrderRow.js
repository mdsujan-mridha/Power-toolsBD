import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order,index}) => {


  const handleDetele = id => {

         const procced = window.confirm('Are you sure to delete?');
         if(procced){
            const url = `https://guarded-bayou-50166.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                       console.log(data);
                      
                })
         }
        // console.log('delete buttton clicked');
       
    }



    return (
        <tr>

            <td>{index + 1}</td>
            <td> {order.name} </td>
            <td> {order.quantity} </td>
            <td> {order.price} </td>
            <td>
                {
                    (order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-primary'>Pay </button> </Link>
                }
                {
                    (order.price && order.paid) && <span className='text-success'> Paid  </span>
                }
            </td>
            <td>
            <button onClick={()=>handleDetele(order._id)} className="btn btn-xs btn-error">Tiny</button>
            </td>

        </tr>
    );
};

export default OrderRow;