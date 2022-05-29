import React from 'react';



const UserRow = ({ user,refetch }) => {
    const { email,role } = user;
    const makeAdmin = () => {
        fetch(`https://guarded-bayou-50166.herokuapp.com/users/admin/${email}`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    alert("only an admin can make an admin");
                }
                return res.json()
               
            })
            .then(data => {
                if(data.modifiedCount > 0){
                    refetch();
                    console.log(data)
                }
                
               
            })
    }

  const handleUserDelete = (id) =>{
      const procced = window.confirm('Are Your sure?');
      
       if(procced){
           const url= `https://guarded-bayou-50166.herokuapp.com/user/${id}`;
           fetch(url ,{
               method:'DELETE',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
               
           })
           .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
       }
  }



    return (

        <tr>
         
            <td> {email} </td>
     
            <td>
                <button onClick={()=>handleUserDelete(user?._id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td> {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs text-primary">Make Admin</button>}
                 </td>
                
        </tr>

    );
};

export default UserRow;