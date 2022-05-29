import React from 'react';
import UseProducts from '../CustomsHooks/UseProducts';

const ManageProduct = () => {

    const [products, setProducts] = UseProducts()
    // console.log(product);

    const handleDelete = id => {

        const procced = window.confirm("Are your sure?")
        if (procced) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                       console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })



        }
    }


    return (
        <div>
               <h1> Manage Your product </h1>

               {
                    products.map(product => <div key={product._id}>
                       
                                    <div className="grid grid-cols-2 gap-5">
                                        <h1> Name: {product.name} </h1>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-xs w-12 btn-error'> Delete </button>
                                    </div>
                                   
                                </div>
                    )     
                    }     
        </div>
    );
};

export default ManageProduct;