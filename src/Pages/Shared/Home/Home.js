import React from 'react';
import Products from '../../Components/Products/Products';
import Upcoming from '../../Components/Upcoming/Upcoming';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12 mx-12'>
            <Banner></Banner>
            <Products></Products>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;