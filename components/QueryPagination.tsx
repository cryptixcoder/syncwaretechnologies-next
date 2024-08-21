'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface QueryPaginationProps {
    totalPages: number;
    className?: string;
}

export function QueryPagination({ totalPages, className } : QueryPaginationProps) {
     const pathname = usePathname();
     const searchParams = useSearchParams();


     const currentPage = Number(searchParams.get("page")) || 1;

     const prevPage = currentPage - 1;
     const nextPage = currentPage + 1;

     const createPageUrl = (pageNumber: string | number ) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());

        return `${pathname}?${params.toString()}`
     }

    return (
        <nav className={clsx("flex items-center justify-between border-t border-gray-200 px-4 sm:px-0", className)}>
            {prevPage >= 1 ? (
                <div className="-mt-px flex w-0 flex-1">
                    <a href={createPageUrl(prevPage)} className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
                    </svg>
                    Previous
                    </a>
                </div>
            ) : null}
            <div className="hidden md:-mt-px md:flex">
                {Array(totalPages).fill("").map((_, index) => <a href={createPageUrl(index + 1)} key={`pagination-${index}`} className={clsx("inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium", (currentPage === index + 1) ? "border-slate-900 text-slate-900" : "text-gray-500 hover:border-gray-300 hover:text-gray-700")}>{index+1}</a>)}
            </div>
            {nextPage <= totalPages ? (
                <div className="-mt-px flex w-0 flex-1 justify-end">
                    <a href={createPageUrl(nextPage)} className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Next
                    <svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
                    </svg>
                    </a>
                </div>
            ) : null}
        </nav>
    )
}