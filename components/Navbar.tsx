import Link from 'next/link';

function Navbar() {
  return (
    <nav className=' font-sans max-w-3xl mx-auto py-4 flex gap-x-4'>
      <Link href='/'>Home</Link>
      <Link href='/about'>Wir</Link>
      <Link href='/shop'>Online Shops</Link>
      <Link href='/web'>Webseite</Link>
      <Link href='/ideen'>Ideen</Link>
    </nav>
  );
}
export default Navbar;