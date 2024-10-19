import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='font-sans max-w-3xl mx-auto py-4 flex gap-x-4 items-center'>
      <Link href='/' className="focus:outline-none focus:ring-2 focus:ring-green-500">
        <img src="/estLogo.svg" alt="Logo" width={100} height={50} />
      </Link>
      <Link href='/' className="text-coral-red hover:text-tangerine focus:outline-none focus:ring-2 focus:ring-green-500">
        Home
      </Link>
      <Link href='/about' className="text-coral-red hover:text-tangerine focus:outline-none focus:ring-2 focus:ring-green-500">
        Wir
      </Link>
      <Link href='/shop' className="text-coral-red hover:text-tangerine focus:outline-none focus:ring-2 focus:ring-green-500">
        Online Shops
      </Link>
      <Link href='/ideen' className="text-coral-red hover:text-tangerine focus:outline-none focus:ring-2 focus:ring-green-500">
        Ideen
      </Link>
      <Link href='/botope' className="text-coral-red hover:text-tangerine focus:outline-none focus:ring-2 focus:ring-green-500">
        Botope
      </Link>
    </nav>
  );
};

export default Navbar;
