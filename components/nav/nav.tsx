'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import Container from '../layout/container'
import { useEffect, useState } from 'react'

type NavLink = {
  name: string
  href: string
  subLinks: {
    name: string
    href: string
  }[]
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/', subLinks: [] },
  { name: 'About Us', href: '/about-us', subLinks: [] },
  {
    name: 'Courses',
    href: '/courses',
    subLinks: [
      { name: 'Super Tech Kids', href: '/courses/super-tech-kids' },
      {
        name: 'Creative Tech Junior',
        href: '/courses/creative-tech-junior',
      },
      { name: 'Maker Tech Pro', href: '/courses/maker-tech-pro' },
      { name: 'First Tech Camp', href: '/courses/first-tech-camp' },
      { name: 'Stem-Dsa', href: '/courses/stem-dsa' },
      { name: 'Elite Coder', href: '/courses/elite-coder' },
    ],
  },
  { name: 'Contact Us', href: '/contact-us', subLinks: [] },
]

export default function Nav() {
  const pathname = usePathname()
  const [navBar, setNavBar] = useState(false)

  function changeBackground() {
    if (window.scrollY >= 30) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <nav
      className={`fixed z-50 w-full py-4 bg-white ${navBar ? 'shadow-md' : ''} transition-all duration-300 ease-in-out`}
    >
      <Container className='flex items-center justify-between text-lg font-semibold tracking-wide'>
        <Link href={'/'} className='font-solaris text-myOrange text-3xl'>
          IN3
        </Link>
        <ul className='hidden gap-8 md:flex'>
          {navLinks.map((link, index) => (
            <li
              className={`${
                pathname === link.href ? 'bg-myOrange text-white' : ''
              } hover:bg-myOrange cursor-pointer rounded px-3 py-1 transition-all duration-150 ease-in-out hover:text-white`}
              key={index}
            >
              {link.subLinks.length === 0 && (
                <Link href={link.href}>{link.name}</Link>
              )}
              {link.subLinks.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger className='flex items-center justify-center gap-2 outline-none'>
                    <span>{link.name}</span>
                    <IoMdArrowDropdown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subLinks.map((subLink, index) => (
                      <Link key={index} href={subLink.href} className='group'>
                        <DropdownMenuItem className='group-hover:bg-myOrange cursor-pointer text-lg font-semibold group-hover:text-white'>
                          {subLink.name}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </li>
          ))}
        </ul>
        <div className='block md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiMenuAlt2 className='h-7 w-7 outline-none' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navLinks.map((link, index) => (
                <DropdownMenuItem className='text-lg' key={index}>
                  {link.subLinks.length === 0 && (
                    <Link href={link.href}>{link.name}</Link>
                  )}
                  {link.subLinks.length > 0 && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className='flex items-center justify-center gap-2 outline-none'>
                        <span>{link.name}</span>
                        <IoMdArrowDropdown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {link.subLinks.map((subLink, index) => (
                          <Link
                            key={index}
                            href={subLink.href}
                            className='group'
                          >
                            <DropdownMenuItem className='group-hover:bg-myOrange cursor-pointer text-lg font-semibold group-hover:text-white'>
                              {subLink.name}
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </nav>
  )
}
