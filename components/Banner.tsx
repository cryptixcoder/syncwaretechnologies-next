"use client"

import { usePathname } from 'next/navigation'

export default function Banner() {
    const path = usePathname();

    if(path == '/'){
        return (
            <div className="block bg-primary-700 py-4">
                <div className="container mx-auto">
                    <h5 className='text-center text-white font-display tracking-wide'>Does your team need reliable Design and Development support? Checkout our new <a href="https://ontap.syncwaretechnologies.com" className="hover:underline underline-offset-2">OnTap</a> service!</h5>
                </div>
            </div>
        )
    }

    return null
}