// src/Menu.jsx
'use client';

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const Menu = () => { 
    return(
        <aside>
            <Link className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200">All</Link></aside>
       
    )
}

const MenuItem = () => {
    
    const searchParams = useSearchParams()

    return(
        <div>
            <Link href="/">All</Link>
            {uniqueCategory.map((category => {
            return <Link href={`/?filter=${category}`} key={category}>{category}</Link>
        }))}</div>
    )
}