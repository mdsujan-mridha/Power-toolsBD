import React from 'react';

const ManageOrderRow = ({ booking, index }) => {
    //   console.log(booking);
    const { customerName, name } = booking;
     const handleShipedSuhbmit = () =>{
         alert('Are you sure')
     }
    return (
        <tr>
            <th>{index + 1} </th>
            <td> {name} </td>
            <td> {customerName} </td>
            <td> {
                <button onClick={handleShipedSuhbmit} class="btn btn-xs btn-primary"> shipped  </button>
            } </td>
        </tr>
    );
};

export default ManageOrderRow;