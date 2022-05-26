import React from 'react';
import Products from '../../Components/Products/Products';
import Upcoming from '../../Components/Upcoming/Upcoming';
import Whyus from '../../Components/Whyus/Whyus';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Upcoming></Upcoming>
            <Whyus></Whyus>
        </div>
    );
};

export default Home;