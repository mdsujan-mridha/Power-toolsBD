import React from 'react';
import Products from '../../Components/Products/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;