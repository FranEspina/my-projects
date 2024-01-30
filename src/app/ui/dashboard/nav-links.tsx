'use client'

import {
  HomeIcon,
  DocumentDuplicateIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Inicio', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Proyectos',
    href: '/dashboard/projects',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Lenguajes', href: '/dashboard/languages', icon: CommandLineIcon },
];

export default function NavLinks () {
  const pathname = usePathname()
  return (
  <>
    {links.map(item => {
        const LinkIcon = item.icon
        return (
          <Link 
            key={item.name} 
            href={item.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-900 p-3 text-sm 
            font-medium hover:bg-sky-950 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathname === item.href ? 'bg-sky-700' : ''}
            `}
          >
            <LinkIcon className='w-6'></LinkIcon>
            <p className='w-20 hidden md:block'>{item.name}</p>
          </Link>
              
          )
      })
    }
  </>
  )
}