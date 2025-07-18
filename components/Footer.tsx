import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-slate py-12 bg-black bg-opacity-60 text-white font-bold">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
                    {' '}
                    {/* Added md:gap-8 for clarity */}
                    {/* Logo and Description */}
                    <div className="space-y-4 text-center md:text-left">
                        {' '}
                        {/* Centered on mobile, left-aligned on desktop */}
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            {' '}
                            {/* Centered on mobile */}
                            <div className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center">
                                <img
                                    src="https://avatars.githubusercontent.com/u/216775761?s=200&v=4"
                                    alt="uplift.cle Logo"
                                    className="w-8 h-8 rounded"
                                />
                            </div>
                            <span className="font-bold text-xl ">
                                uplift.cle
                            </span>
                        </div>
                        <p className="text-sm ">
                            Uplifting Cleveland through innovative,
                            community-centered solutions.
                        </p>
                    </div>
                    {/* Organization Links */}
                    <div className="space-y-4 text-center md:text-left">
                        {' '}
                        {/* Centered on mobile, left-aligned on desktop */}
                        <h4 className="font-semibold">Organization</h4>
                        <div className="space-y-2 text-sm">
                            <Link
                                href="/#about"
                                className="block decoration-transparent hover:decoration-green-700 hover:underline hover:decoration-4 transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="/#mission"
                                className="block decoration-transparent hover:decoration-green-700 hover:underline hover:decoration-4 transition-colors"
                            >
                                Mission
                            </Link>
                            <Link
                                href="/who-we-are"
                                className="block decoration-transparent hover:decoration-green-700 hover:underline hover:decoration-4 transition-colors"
                            >
                                Who We Are
                            </Link>
                        </div>
                    </div>
                    {/* Get Involved Links */}
                    <div className="space-y-4 text-center md:text-left">
                        {' '}
                        {/* Centered on mobile, left-aligned on desktop */}
                        <h4 className="font-semibold">Get Involved</h4>
                        <div className="space-y-2 text-sm">
                            <Link
                                href="/contact"
                                className="block decoration-transparent hover:decoration-green-700 hover:underline hover:decoration-4 transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/donate"
                                className="block decoration-transparent hover:decoration-green-700 hover:underline hover:decoration-4 transition-colors"
                            >
                                Donate
                            </Link>
                            <Link
                                href="/locations"
                                className="block decoration-transparent hover:decoration-green-700 hover:underline hover:decoration-4 transition-colors"
                            >
                                Locations
                            </Link>
                        </div>
                    </div>
                    {/* Connect Info */}
                    <div className="space-y-4 text-center md:text-left">
                        {' '}
                        {/* Centered on mobile, left-aligned on desktop */}
                        <h4 className="font-semibold">Connect</h4>
                        <div className="space-y-2 text-sm ">
                            <p>hello@uplift.cle</p>
                            <p>(216) 555-0123</p>
                            <p>Cleveland, OH</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
                    <p>
                        {' '}
                        Disclaimer: This organization is not affiliated with any
                        school or university.
                        <br />
                        <br />© {new Date().getFullYear()} uplift.cle. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
