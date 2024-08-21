"use client"

import { usePathname } from 'next/navigation'

export default function Banner() {
    const path = usePathname();

    if(path == '/'){
        return (
            <div className="block bg-primary-700 py-8">
                <div className="container mx-auto">
                    <h5 className='text-center text-white '>Does your team need reliable design and dev support? Checkout our new <a href="https://ontap.syncwaretechnologies.com">On-Tap</a> service </h5>
                </div>
            </div>
        )
    }

    return null
}