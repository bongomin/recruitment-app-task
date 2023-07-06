import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          &copy; 2023 Entrebyte Technologies. All rights reserved.
        </p>
        <p className="text-gray-500">
          Developed by Bongomin Daniel | <a href="mailto:me@ai.com">bongomindaniel@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
