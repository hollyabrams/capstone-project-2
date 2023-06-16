import Logo from "./Logo";
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useShoppingCart } from "use-shopping-cart";

function ShoppingCart() {
    const { formattedTotalPrice, cartCount } = useShoppingCart();

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

function Navigation({ isOpen, loggedIn, logout, currentUser }) {
  const navItems = loggedIn
      ? [
          { to: "/products", name: "Products" },
          { to: "/profile", name: "Profile" },
          { to: "/", name: `Log out ${currentUser.first_name || currentUser.username}`, onClick: logout }
      ]
      : [
          { to: "/products", name: "Products" },
          { to: "/login", name: "Login" },
          { to: "/signup", name: "Sign Up" }
      ];

  return (
      <ul className={`flex items-center space-x-1 text-gray-700 hover:text-gray-900 ${isOpen ? '' : 'hidden'} sm:flex sm:items-center sm:justify-center sm:flex-grow`}>
          {navItems.map((item, idx) => (
              <li className="nav-item mx-4" key={idx}>
                  <NavLink className={`nav-link ${item.name === 'Login' || item.name === 'Profile' ? 'mr-4' : ''}`} to={item.to} onClick={item.onClick}>
                      {item.name}
                  </NavLink>
              </li>
          ))}
          <li className="sm:hidden">
              <ShoppingCart />
          </li>
      </ul>
  );
}

export default function NavBar() {
  const { currentUser, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  console.debug('NavBar', 'currentUser=', currentUser);

  return (
      <nav className="sticky top-0 bg-white z-10 shadow">
          <div className="container mx-auto p-6 flex flex-wrap justify-between items-center">
              <Logo to="/" />
              <div className="px-4 cursor-pointer sm:hidden ml-auto absolute right-6 top-6" onClick={toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              </div>
              <div className="flex-grow sm:flex sm:items-center sm:justify-center">
                  <Navigation isOpen={isOpen} loggedIn={!!currentUser} logout={logout} currentUser={currentUser} />
              </div>
              <div className="hidden sm:block">
                  <ShoppingCart />
              </div>
          </div>
      </nav>
  );
}

