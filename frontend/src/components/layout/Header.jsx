import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 p-4">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </header>
  );
};

export default Header;
