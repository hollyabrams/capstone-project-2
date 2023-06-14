import Logo from "./Logo";
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useShoppingCart } from "use-shopping-cart";

export default function NavBar() {
    const { currentUser, logout } = useContext(UserContext);
    const { formattedTotalPrice, cartCount } = useShoppingCart()
    const [isOpen, setIsOpen] = useState(false); 

    console.debug('NavBar', 'currentUser=', currentUser);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function Shoppingcart() {
        return (
            <NavLink to='/cart' className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <div className="relative">
                    <ShoppingCartIcon className="w-7 h-7 flex-shrink-0"/>
                </div>
                <p className="text-lg">
                      {formattedTotalPrice}
                    <span className="text-sm text-gray-500" >({cartCount})</span>
                </p>
            </NavLink>
        );
    }

    function loggedInNav() {
      return (
        <ul className={`flex items-center space-x-1 text-gray-700 hover:text-gray-900 ${isOpen ? '' : 'hidden'} sm:flex sm:items-center sm:justify-center sm:flex-grow`}>
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
          <li className="sm:hidden">
              <Shoppingcart />
          </li>
        </ul>
      );
    }
    
    function loggedOutNav() {
    return (
        <ul className={`flex items-center space-x-1 text-gray-700 hover:text-gray-900 ${isOpen ? '' : 'hidden'} sm:flex sm:items-center sm:justify-center sm:flex-grow`}>
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
            <li className="sm:hidden">
                <Shoppingcart />
            </li>
        </ul>
    );
    }

    return (
        <nav className="sticky top-0 bg-white z-10 shadow">
            <div className="container mx-auto p-6 flex flex-wrap justify-between items-center">
                <Logo to="/" />
                <div className="px-4 cursor-pointer sm:hidden ml-auto absolute right-6 top-6" onClick={toggleMenu}>
                  {/* SVG for hamburger menu icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <div className="flex-grow sm:flex sm:items-center sm:justify-center">
                    {currentUser ? loggedInNav() : loggedOutNav()}
                </div>
                <div className="hidden sm:block">
                    <Shoppingcart />
                </div>
            </div>
        </nav>
    );
}
