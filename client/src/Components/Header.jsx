import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const links = [
        { name: 'Home', href: '/' },
        { name: 'Properties', href: '/properties' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Sign In', href: '/signin' },      

    ]; 

    // Prevent scrolling when the menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-white shadow-lg fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/home" className="text-2xl font-bold text-primary">
                            Zaawadi Homes
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-600 hover:text-secondary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="block px-3 py-2 text-gray-600 hover:text-secondary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
