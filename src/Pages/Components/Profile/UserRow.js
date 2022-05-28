import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (

        <tr>
         
            <td> {email} </td>
     
            <td>
                <button class="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td> <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> </td>
        </tr>

    );
};

export default UserRow;