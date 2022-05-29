// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';
// import useAdmin from '../Components/CustomsHooks/useAdmin';

// const RequereAdmin = ({children}) => {
//     const [user,loading] = useAuthState(auth);
//     const [admin,adminLoading] = useAdmin(user);
//      const location = useLocation();

//      if(loading || adminLoading){
//          return <button className="btn btn-square loading"></button>
//      }
//    if(!user || admin){
//        return <Navigate to="/login" state={{from :location}} replace />
//    }
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default RequereAdmin;