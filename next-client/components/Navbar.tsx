import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 shadow-md w-full transition duration-300 ease-in-out transform hover:shadow-lg">
      <div className="text-lg font-bold flex items-center">
        <img
          src="/logo.svg"
          alt="RecruitmentWeb Logo"
          className="w-8 h-8 mr-2"
        />
        Entrebyte Technologies
      </div>
      <div className="ml-auto space-x-4">
        <Link href="/saved" passHref>
          <span className="border border-blue-500 px-4 py-2 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            Saved Jobs
          </span>
        </Link>
        <Link href="/login" passHref>
          <button className="border border-gray-600 px-4 py-2 rounded-md transition duration-300 ease-in-out">
            Login
          </button>
        </Link>
        <Link href="/register" passHref>
          <button className="border border-gray-600 px-4 py-2 rounded-md transition duration-300 ease-in-out">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>

  );
};

export default Navbar;
