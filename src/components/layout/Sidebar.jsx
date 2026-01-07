
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, navItems }) => {
  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <>

      {isOpen && (
        <div
          className="fixed inset-0 bg-secondary bg-opacity-70 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary shadow-xl transform transition-transform duration-300 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:hidden`}
      >
        <div className="p-4 border-b border-accent flex justify-between items-center">
          <h3 className="text-xl font-bold text-secondary">Menu</h3>
          <button onClick={toggleSidebar} className="text-accent hover:text-secondary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="mb-2">

                <Link
                  to={`/${item.name === 'Home' ? '' : item.name.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="block p-2 text-lg font-semibold text-secondary hover:bg-gray-100 hover:text-accent rounded transition-colors"
                >
                  {item.name}
                </Link>


                {item.subCategory && (
                  <ul className="ml-4 mt-1 border-l border-accent">
                    {item.subCategory.map((sub, subIndex) => (
                      <li key={subIndex}>

                        <Link
                          to={`/${item.name.toLowerCase()}/${sub.toLowerCase()}`}
                          onClick={handleLinkClick}
                          className="block py-1 px-3 text-sm text-accent hover:text-secondary transition-colors"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;