import React, { useState } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import Image from '../assests/image.png';
import Dashboard from './Dashboard';

const Upper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className='w-screen flex flex-col'>
      <div className={`flex fixed w-full justify-between items-center h-16 p-4 overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-100 text-black'}`}>
        <h2 className='ml-20'>oneBox</h2>
        <div className="flex items-center gap-2">
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? <CiLight /> : <CiDark />}
          </button>
          <select className={`bg-transparent border border-gray-300 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-900 text-gray-500' : 'bg-gray-100 text-black'}`}>
            <option value="" className='text-gray-600'>Tim's Workspace</option>
            <option value="" className='text-gray-600'>Tim's Workspace</option>
            <option value="" className='text-gray-600'>Tim's Workspace</option>
          </select>
        </div>
      </div>
    <Dashboard/>
    </div>
  );
};

export default Upper;
