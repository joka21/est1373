import Link from 'next/link';

function Navbar() {
  return (
    <nav className="font-sans max-w-3xl mx-auto py-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-coral-red mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
          </svg>
          <span className="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-coral-red border-coral-red hover:text-tangerine hover:border-tangerine">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="text-sm sm:flex-grow">
            <div className="sm:flex sm:justify-end">
              <a href="/" className="block mt-4 sm:inline-block sm:mt-0 text-coral-red hover:text-tangerine mr-4">
                Home
              </a>
              <a href="/about" className="block mt-4 sm:inline-block sm:mt-0 text-coral-red hover:text-tangerine mr-4">
                Wir
              </a>
              <a href="/shop" className="block mt-4 sm:inline-block sm:mt-0 text-coral-red hover:text-tangerine mr-4">
                Online Shops
              </a>
              <a href="/ideen" className="block mt-4 sm:inline-block sm:mt-0 text-coral-red hover:text-tangerine mr-4">
                Ideen
              </a>
              <a href="/botope" className="block mt-4 sm:inline-block sm:mt-0 text-coral-red hover:text-tangerine">
                Botope
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
