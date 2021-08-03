import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="div.header__nav">
                <Link className="header__link">
                    <div className="header__option">
                        <span>hello Sanoj</span>
                        <span>Sign In</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>
            </div>
           

           
        </nav>
    )
}
export default Header;