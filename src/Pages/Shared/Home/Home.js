import React from 'react';
import BusinessSummary from '../../Components/BusinessSummary/BusinessSummary';
import Products from '../../Components/Products/Products';
import AllReview from '../../Components/Profile/AllReview';

import Upcoming from '../../Components/Upcoming/Upcoming';
import Whyus from '../../Components/Whyus/Whyus';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Upcoming></Upcoming>
            <BusinessSummary></BusinessSummary>
            <Whyus></Whyus>
            <AllReview></AllReview>
        </div>
    );
};

export default Home;