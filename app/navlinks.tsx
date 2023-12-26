'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: 'Home', href: '/' },
  { name: 'Todos', href: '/todos' },
  { name: 'Private', href: '/private' },
];

export function Navlinks() {
  const pathname = usePathname()

  return (
    <ul className="flex items-center justify-between gap-10">
      {navlinks.map(link => {
        const isActive = pathname === link.href
        return (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className={`${isActive ? 'text-violet-500' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}