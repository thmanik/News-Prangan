
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Logo from "../../assets/logo.png"
import useHeaderScroll from '../../hooks/useHeaderScroll'; 


const navItems = [
    { name: "Home" },
    { name: "National", subCategory: ["Government", "Economy", "Health"] },
    { name: "International", subCategory: ["Commerce", "Humanitarian"] },
    { name: "Sports", subCategory: ["Cricket", "Football", "Olympics"] },
    { name: "Technology", subCategory: ["AI", "Gadgets"] },
];

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const location = useLocation();

    
    const isNavVisible = useHeaderScroll(); 

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const isActive = (itemName) => {
        const currentPathSegment = location.pathname.split('/')[1];

        if (itemName === 'Home') {
            return location.pathname === '/';
        }

        return currentPathSegment === itemName.toLowerCase();
    };


    
    const navBarClasses = `
        hidden lg:block border-t border-accent shadow-sm 
        fixed top-[68px] w-full z-20 bg-primary 
        transition-transform duration-300 ease-in-out
        ${isNavVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
    `;

    return (
        <>
            <header className="sticky  top-0 bg-primary z-30 border-b border-accent">
                <div className="container mx-auto px-2 md:px-4 py-3 flex justify-between items-center h-[68px]">

                    <button
                        onClick={toggleSidebar}
                        className="text-secondary p-2 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label="Open Menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>

                    <div className="flex-grow flex justify-center lg:justify-start">
                        <Link to="/" aria-label="Home" className="flex items-center space-x-2">
                            <img
                                src={Logo}
                                alt="New Prangan Logo"
                                className="h-12 w-auto"
                            />

                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="bg-secondary text-primary px-4 py-2 text-sm font-semibold rounded hover:bg-accent transition-colors">
                            Register
                        </button>
                        <button className="text-sm font-semibold text-secondary hidden sm:block">
                            Sign In
                        </button>
                    </div>
                </div>
            </header>


            <div className={navBarClasses}>
                <nav className="container mx-auto px-4 md:px-8">
                    <ul className="flex justify-center space-x-6">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className="relative"
                            >
                                <Link
                                    to={`/${item.name === 'Home' ? '' : item.name.toLowerCase()}`}
                                    className={`block my-3 text-sm font-semibold text-secondary hover:text-accent transition-colors 
                                        ${(isActive(item.name) || hoveredItem === item.name) ? 'border-b-2 border-accent text-accent' : ''}`}
                                >
                                    {item.name}
                                </Link>


                                {item.subCategory && hoveredItem === item.name && (
                                    <div
                                        className="absolute left-0 mt-0 w-48 bg-primary border border-accent rounded shadow-lg z-20"
                                    >
                                        <ul className="py-1">
                                            {item.subCategory.map((sub, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        to={`/${item.name.toLowerCase()}/${sub.toLowerCase()}`}
                                                        className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-accent transition-colors"
                                                        onClick={() => setHoveredItem(null)}
                                                    >
                                                        {sub}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                navItems={navItems}
            />
        </>
    );
};

export default Header;