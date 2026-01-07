
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";

const Footer = () => {

    const footerLinks = [
        {
            title: "Sections",
            items: [
                { name: "National", path: "/national" },
                { name: "International", path: "/international" },
                { name: "Sports", path: "/sports" },
                { name: "Technology", path: "/technology" },
            ]
        },
        {
            title: "Company",
            items: [
                { name: "About Us", path: "#" },
                { name: "Our Team", path: "#" },
                { name: "Careers", path: "#" },
                { name: "Contact", path: "#" },
                { name: "Advertise", path: "#" },
            ]
        },
        {
            title: "Legal",
            items: [
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Use", path: "#" },
                { name: "Cookie Settings", path: "#" },
                { name: "Disclaimer", path: "#" },
            ]
        },
    ];

    const socialIcons = [

        { name: "Facebook", link: "#", src: FacebookIcon, alt: "Facebook" },
        { name: "Twitter", link: "#", src: TwitterIcon, alt: "Twitter" },
        { name: "Instagram", link: "#", src: InstagramIcon, alt: "Instagram" },
        { name: "YouTube", link: "#", src: YoutubeIcon, alt: "YouTube" },
    ];


    return (

        <footer className="bg-gray-900 border-t border-accent/30 mt-16 pt-10 pb-4 text-white">
            <div className="container mx-auto px-4 max-w-7xl">


                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 border-b border-gray-700 pb-10 mb-8">
                    <div className="md:col-span-1 lg:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img
                                src={Logo}
                                alt="Website Logo"
                                className="h-12 w-auto filter invert"
                            />
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm mb-4">
                            Bringing you the latest updates and in-depth analysis from around the globe. Stay informed with our reliable news coverage.
                        </p>


                        <div className="space-y-1 text-sm">
                            <p className="text-gray-400 font-semibold">New Prangan News</p>
                            <p className="text-gray-400">Dhaka, Bangladesh</p>
                            <p className="text-gray-400">Email: info@prangan.com</p>
                        </div>
                    </div>


                    {footerLinks.map((section, index) => (
                        <div key={index} className="md:col-span-1">
                            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">

                                {section.items.map((item, i) => (
                                    <li key={i}>

                                        <Link
                                            to={item.path}
                                            className="text-gray-400 hover:text-accent text-base transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="md:col-span-3 lg:col-span-2">

                        <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                            Subscribe to Newsletter
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Don't miss out on our best stories. Get the top news delivered straight to your inbox daily.
                        </p>
                        <form className="flex rounded-lg overflow-hidden border-2 border-gray-700 focus-within:border-accent transition-colors duration-300">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="p-3 text-sm w-full focus:outline-none bg-gray-800 text-white placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                className="bg-accent text-white px-4 text-sm font-bold uppercase hover:bg-secondary transition-colors duration-300"
                            >
                                Send
                            </button>
                        </form>


                        <div className="mt-8">

                            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                                Follow Us
                            </h4>
                            <div className="flex space-x-5">
                                {socialIcons.map((social, index) => (
                                    <a
                                        key={index}
                                        className="text-gray-400 cursor-pointer hover:text-accent transition-colors duration-200"
                                    >
                                        <img width={25} height={25} src={social.src}></img>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>


                <div className="text-center text-sm text-gray-500">
                    <p>
                        &copy; 2026 New Prangan. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;