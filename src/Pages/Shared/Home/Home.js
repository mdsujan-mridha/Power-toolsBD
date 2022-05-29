import React from 'react';
import { Link } from 'react-router-dom';
import BusinessSummary from '../../Components/BusinessSummary/BusinessSummary';
import UseProducts from '../../Components/CustomsHooks/UseProducts';
import Product from '../../Components/Product/Product';
import Products from '../../Components/Products/Products';
import AllReview from '../../Components/Profile/AllReview';

import Upcoming from '../../Components/Upcoming/Upcoming';
import Whyus from '../../Components/Whyus/Whyus';
import Banner from './Banner';

const Home = () => {
    const [products,setProducts] = UseProducts();
    const splice = products.slice(products, 6);
    return (
        <div>
            <Banner></Banner>
              <div className='mb-16'>  
              <div className='px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 mb-10 mt-5'>  
                  {
                    splice.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
                
             </div>
             <Link className='btn items-center justify-center sm:mx-1 sm:w-full lg:mx-80 lg:w-32' to="/products">   Load All Tools </Link>
              </div>
             
            <Upcoming></Upcoming>
            <BusinessSummary></BusinessSummary>
            <Whyus></Whyus>
            <AllReview></AllReview>
        </div>
    );
};

export default Home;