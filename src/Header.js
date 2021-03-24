import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user },  dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            {/* The Link will take you back to the home page when you click the logo */}
            <Link to="/">
                <img 
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="header__logo" 
                />
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon 
                className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* this will link to the login page */}
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">{user ? `Hello ${user?.email}` : 'Hello Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>
                </Link>
                
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span> 
                    {/* basket?.length: the ? is optional chaining used to handle errors in case your basket is empty */}
                </div>
            </Link>
        </div>
    )
}

export default Header

