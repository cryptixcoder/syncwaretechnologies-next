"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

export const Navigation = () => {
    return (
        <Disclosure as="header"className="bg-slate-900" >
            {({open}) => (
                <>
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
                                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-slate-500 hover:bg-slate-700 focus:outline-none " aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    { open ? (
                                        <XMarkIcon className="block h-6 w-6" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" />
                                    ) }
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>
                    <DisclosurePanel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link href="/work" className="block py-2 text-center text-white font-display text-xl font-medium uppercase hover:underline">Our Work</Link>
                            <Link href="/services" className="block py-2 text-center text-white font-display text-xl font-medium uppercase hover:underline">Our Services</Link>
                            <Link href="/about" className="block py-2 text-center text-white font-display text-xl font-medium uppercase hover:underline">About</Link>
                            <Link href="/blog" className="block py-2 text-center text-white font-display text-xl font-medium uppercase hover:underline">Blog</Link>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}