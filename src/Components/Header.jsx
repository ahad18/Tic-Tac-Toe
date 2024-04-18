import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
          <img className='w-20' src="src/assets/5ef0c05504b7c6d3e538e54d_Amazon-Logo.png" alt="" srcset="" />
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600" to="/">Home</Link>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1 active:border-b-2 active:dark:border- dark:text-violet-600 dark:border-violet-600" to="/about">About</Link>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600" to="/services">Services</Link>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600" to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
