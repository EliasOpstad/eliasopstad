'use client'; 

import Link from 'next/link';

const Navbar = () => {
    const sections = ['Hvem er jeg?', 'prosjekter', 'ferdigheter', 'utdanning', 'jobberfaring', 'fritid'];

    return (
        <nav className='fixed top-0 left-0 right-0 bg-white shadow-md p-4 '>
            <div className='w-2/3 mx-auto flex justify-center space-x-10 z-50'>
            {sections.map((section) => (
                <Link
                key={section}
                href={`#${section}`}
                className='text-grey hover:text-blue-500 font-medium'>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
            ))}
            </div>
        </nav>
    );
};

export default Navbar;
