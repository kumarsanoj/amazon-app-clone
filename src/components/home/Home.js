import React from 'react';
import './Home.css';
import Product from '../product/Product';

const Home = () => {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <Product id="1" title="product1" image="" price="150" rating={4}/>
            <Product id="1" title="product1" image="" price="150" rating={4}/>
            <Product id="1" title="product1" image="" price="150" rating={4}/>
        </div>
    )
}

export default Home;