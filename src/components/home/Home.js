import React from 'react';
import './Home.css';
import Product from '../product/Product';
import getFlatDataList from '../../stub/item'

const Home = () => {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                <div className="home__productContainer">
                {
                getFlatDataList().map(({id, name, imageUrl, rating, price}) => (
                    <Product id={id} name={name} image={imageUrl} price={price} rating={rating}/>  
                ))
            }
                </div>
            
        </div>
    )
}

export default Home;