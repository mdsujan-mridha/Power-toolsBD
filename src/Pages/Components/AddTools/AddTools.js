import React from 'react'; import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form'
import auth from '../../../firebase.init';

const AddTools = () => {


    const [user] = useAuthState(auth)

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        
         fetch(`http://localhost:5000/products`,{
             method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify(data)
         })
         .then(res =>res.json())
          .then(data=>{
              console.log(data);
          })
         

    };

    return (

        <div className ='flex justify-center items-center h-screen'>
        <div class ="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center">
                <h2 class=" text-center font-bold text-4xl"> Add new tools  </h2>
              
                <div className='justify-center items-center'>
       
        <div className="">
            <form className='grid grid-cols-1' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='Your email' {...register("email", { required: true, maxLength: 30 })} />
                <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='Enter product name'  {...register("name", { required: true, maxLength: 30 })} />
                <textarea className='border-2 w-full rounded-md h-12 mt-5' placeholder='Enter product description' {...register("content")} />
                <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='Enter product Price' type="number" {...register("price")} />
                <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='Enter product quantity' type="number" {...register("quantity")} />
                <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='photo URL' type="text" {...register("img")} required/>
                <input className='btn btn-primary text-white  max-w-full text-white-100 font-medium mt-9 border-2' type="submit" value="Add product" />
      
            </form>
        </div>

    </div>



            </div>
        </div>
    </div>



    );
};

export default AddTools;
/**


<div className='justify-center items-center'>
        <h1 className=''>  Add New Product with new brand </h1>
        <div className="">
            <form className='grid grid-cols-1' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 w-96 rounded-md h-12 mt-5' placeholder='Your email' {...register("email", { required: true, maxLength: 30 })} />
                <input className='border-2 w-96 rounded-md h-12 mt-5' placeholder='Enter product name'  {...register("name", { required: true, maxLength: 30 })} />
                <textarea className='border-2 w-96 rounded-md h-12 mt-5' placeholder='Enter product description' {...register("description")} />
                <input className='border-2 w-96 rounded-md h-12 mt-5' placeholder='Enter product Price' type="number" {...register("price")} />
                <input className='border-2 w-96 rounded-md h-12 mt-5' placeholder='Enter product quantity' type="number" {...register("quantity")} />
                <input className='border-2 w-96 rounded-md h-12 mt-5' placeholder='photo URL' type="text" {...register("img")} />
                <input className='btn btn-primary text-white w-96 max-w-full text-white-100 font-medium mt-9 border-2' type="submit" value="Add product" />
      
            </form>
        </div>

    </div>



 */