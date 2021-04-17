import './Header.css';
import logo from './logo.png';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';



const Header = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="" className="header__logo"/>
            </Link>


            <div className="header__search">
                <input name="inp" type="text" className="header__searchInput"/>

                <i class="fas fa-search header__searchIcon"></i>
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="first__line">
                            <p>Hello Guests</p>
                        </span>

                        <span className="second__line">
                            <p>{user ? "Sign Out" : "Sign In"}</p>
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="first__line">
                        <p>Return </p>
                    </span>

                    <span className="second__line">
                        <p>& Orders</p>
                    </span>
                </div>

                <div className="header__option">
                    <span className="first__line">
                        <p>Your</p>
                    </span>

                    <span className="second__line">
                        <p>Prime</p>
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <span className="first__line">
                            <i class="fas fa-shopping-cart"></i>
                        </span>

                        <span className="second__line">
                            <p>{basket?.length}</p>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Header
