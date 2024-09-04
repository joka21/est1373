import Link from 'next/link';

function Navbar() {
  return (
    <nav className='font-sans max-w-3xl mx-auto py-4 flex gap-x-4'>
      <Link href='/' className="focus:outline-none focus:ring-2 focus:ring-green-500">
        Home
      </Link>
      <Link href='/about' className="focus:outline-none focus:ring-2 focus:ring-green-500">
        Wir
      </Link>
      <Link href='/shop' className="focus:outline-none focus:ring-2 focus:ring-green-500">
        Online Shops
      </Link>
      <Link href='/web' className="focus:outline-none focus:ring-2 focus:ring-green-500">
        Webseite
      </Link>
      <Link href='/ideen' className="focus:outline-none focus:ring-2 focus:ring-green-500">
        Ideen
      </Link>
    </nav>
  );
}

export default Navbar;
