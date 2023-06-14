import Logo from "./Logo";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useShoppingCart } from "use-shopping-cart";

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

export default function NavBar() {
    const { currentUser, logout } = useContext(UserContext);
    const { formattedTotalPrice, cartCount } = useShoppingCart()
    console.debug('NavBar', 'currentUser=', currentUser);

    function loggedInNav() {
      return (
        <ul className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <button onClick={() => logout()} className="nav-link ml-4 mr-4">
              Log out {currentUser.first_name || currentUser.username}
            </button>
          </li>
          <li>
            <NavLink to='/cart' className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <div className="relative">
                    <ShoppingCartIcon className="w-7 h-7 flex-shrink-0"/>
                </div>
                <p className="text-lg">
                      {formattedTotalPrice}
                    <span className="text-sm text-gray-500" >({cartCount})</span>
                </p>
            </NavLink>
          </li>
        </ul>
      );
    }
    
    function loggedOutNav() {
    return (
        <ul className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
            <li className="nav-item">
              <NavLink className="nav-link mr-4" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link mr-4" to="/login">
                Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link mr-8" to="/signup">
                Sign Up
                </NavLink>
            </li>
            <li>
            <NavLink to='/cart' className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <div className="relative">
                    <ShoppingCartIcon className="w-7 h-7 flex-shrink-0"/>
                </div>
                <p className="text-lg">
                      {formattedTotalPrice}
                    <span className="text-sm text-gray-500" >({cartCount})</span>
                </p>
            </NavLink>
          </li>
        </ul>
    );
    }

    return (
        <nav className="sticky top-0 bg-white z-10 shadow">
            <div className="container mx-auto p-6 flex justify-between">
                <Logo to="/" />
                {currentUser ? loggedInNav() : loggedOutNav()}
            </div>
        </nav>
    )
}