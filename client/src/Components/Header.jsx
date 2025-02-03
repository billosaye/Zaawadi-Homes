import { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MenuLinks({ onLinkClick }) {
    const { user } = useSelector((state) => state.user); // Accessing user from Redux state
    return (
        <>
            <Link to="/" onClick={onLinkClick} className="text-gray-600 hover:text-secondary block px-3 py-2">
                Home
            </Link>
            <Link to="/properties" onClick={onLinkClick} className="text-gray-600 hover:text-secondary block px-3 py-2">
                Properties
            </Link>
            <Link to="/about" onClick={onLinkClick} className="text-gray-600 hover:text-secondary block px-3 py-2">
                About
            </Link>
            <Link to="/contact" onClick={onLinkClick} className="text-gray-600 hover:text-secondary block px-3 py-2">
                Contact
            </Link>
            <Link to="/profile" onClick={onLinkClick}>
            <img src={user?.avatar} alt="profile" className="w-10 h-10 rounded-full" />              
            </Link>

           

            




        </>
    );
}

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-white shadow-lg fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/home" className="text-2xl font-bold text-primary">
                            Zaawadi Homes
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <div className="hidden md:flex items-center">
                        <MenuLinks onLinkClick={closeMenu} />
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <MenuLinks onLinkClick={closeMenu} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
