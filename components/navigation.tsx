import Link from 'next/link'

export const Navigation = () => {
    return (
         <>
         <header className="bg-slate-900" x-data="{ mobileNavOpen: false}">
            <div className="container max-w-6xl">
                <div className="flex justify-between items-center">
                <div>
                    <Link href="/">
                        <img src="/logo-white.svg" alt="" className="w-20" />
                    </Link>
                </div>
                <nav className="hidden sm:flex text-white font-display text-xl space-x-8">
                    <Link href="/work" className="uppercase hover:underline">Our Work</Link>
                    <Link href="/services" className="uppercase hover:underline">Our Services</Link>
                    <Link href="/about" className="uppercase hover:underline">About Us</Link>
                    <Link href="/blog" className="uppercase hover:underline">Blog</Link>
                </nav>
                <div className="mr-5 md:-mr-2 flex items-center sm:hidden">
   
                        {/* <button @click="mobileNavOpen = !mobileNavOpen" type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none " aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg :className="{'block': !mobileNavOpen , 'hidden': mobileNavOpen}" className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg :className="{'block': mobileNavOpen , 'hidden': !mobileNavOpen}" className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
            <div x-show="mobileNavOpen"  className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                <a href="/our-work" className="block py-2 text-center text-white font-display text-xl font-medium uppercase hover:underline">Our Work</a>
                <a href="/our-services" className="block py-2 text-center text-white font-display text-xl font-medium uppercase hover:underline">Our Services</a>
                <a href="/about-us" className="block py-2 text-center text-white font-display text-xl font-medium uppercase hover:underline">About</a>
                </div>
            </div>
        </header>   
         </>
    )
}