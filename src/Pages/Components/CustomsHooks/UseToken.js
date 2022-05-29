import React, { useEffect, useState } from 'react';

const UseToken = user => {
    const [token ,setToken] = useState('');

     useEffect( ()=>{
         const email = user?.user.email;
         const currentUser = {email:email}
        //  console.log(user);
         if(email){
             fetch(`https://guarded-bayou-50166.herokuapp.com/users/${email}`,{
                 method: 'post',
                 headers:{
                     'content-type':'application/json'
                 },
                 body:JSON.stringify(currentUser)
             })
             .then(res => res.json())
              .then(data => {
                console.log(data)
                const accessToken = data.token;
                localStorage.setItem('accessToken',accessToken);
                setToken(accessToken);
              })

         }
     } ,[user])
    return [token]
};

export default UseToken;