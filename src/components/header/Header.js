import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket, SportsBasketball } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider';

const Header = () => {
    const [ {basket}] = useStateValue();
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header_option_lineOne">hello Sanoj</span>
                        <span className="header_option_lineTwo">Sign In</span>
                    </div> 
                </Link> 
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header_option_lineOne">Returns</span>
                        <span className="header_option_lineTwo">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header_option_lineOne">Your</span>
                        <span className="header_option_lineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasket color="#white"/>
                        <span className="header_option_lineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
export default Header;