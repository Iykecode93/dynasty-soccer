import React from "react";
import Header from '../components/Header';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';

function HomePage () {
    return (
        <div>
            <Header/>
            <Banner/>
            <Highlights/>
        </div>
    );
}

export default HomePage;