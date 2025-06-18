'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
            <div className="bg-white/20 backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">U</span>
                        </div>
                        <span className="font-bold text-xl text-gray-900">uplift.<span className="text-emerald-600">cle</span></span>
                    </div>
                </Link>

                <button
                    className="md:hidden text-gray-900 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>

                <nav className="hidden md:flex gap-6">
                    <Link href="#mission" className="text-sm font-semibold hover:text-emerald-600 transition-colors">
                        Mission
                    </Link>
                    <Link href="#teams" className="text-sm font-semibold hover:text-emerald-600 transition-colors">
                        Teams
                    </Link>
                    <Link href="#contact" className="text-sm font-semibold hover:text-emerald-600 transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>

            {isMenuOpen && (
                <div className="md:hidden mt-2 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-lg shadow-lg py-3 px-6">
                    <nav className="flex flex-col gap-3">
                        <Link href="#mission" className="block text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
                            Mission
                        </Link>
                        <Link href="#teams" className="block text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
                            Teams
                        </Link>
                        <Link href="#contact" className="block text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;