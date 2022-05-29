import React from 'react';
import { FaUser } from 'react-icons/fa'
import { BsTools } from 'react-icons/bs'
import { MdDeliveryDining } from 'react-icons/md'
const BusinessSummary = () => {
 

    

    return (
        <div className=' fl bg-zinc-700 w-full h-96 mb-44'> 
        <h1 className='text-center pt-10 text-white font-medium text-4xl'> Business Summary </h1>
   
      
            
            <div className="flex  lg:items-center  lg:justify-around mt-12 pt-10">
               
                <div>
                    <span className="countdown font-mono text-4xl text-purple-500">
                        200+ <FaUser />
                    </span>
                    
                </div>
                <div>
                    <span className="countdown font-mono text-4xl text-purple-500">
                       3000+ < BsTools />
                    </span>
                   
                </div>
                <div>
                    <span className="countdown font-mono text-4xl text-purple-600">
                         
                         10,000+ < MdDeliveryDining/>
                         
                    </span>
                    
                </div>
            </div>
       
        
        </div>  
    );
};

export default BusinessSummary;