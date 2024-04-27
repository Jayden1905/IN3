'use client'
import Container from '../layout/container'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiMenuAlt2 } from 'react-icons/hi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

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
      { name: 'Creative Tech Junior', href: '/courses/creative-tech-junior' },
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

  return (
    <nav className={`fixed z-50 w-full py-4 backdrop-blur`}>
      <Container className="flex items-center justify-between text-lg font-semibold tracking-wide">
        <Link href={'/'} className="font-solaris text-myBlack text-3xl">
          <div>
            <Image
              src={'/logo.png'}
              alt="logo"
              sizes="100vw"
              style={{
                width: '60px',
                height: '60px',
              }}
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </Link>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link, index) => (
            <li
              className={`${
                pathname === link.href ? 'bg-myOrange text-primary' : ''
              } hover:bg-myOrange hover:text-primary cursor-pointer rounded px-3 py-1 transition-all duration-150 ease-in-out`}
              key={index}
            >
              {link.subLinks.length === 0 && (
                <Link href={link.href}>{link.name}</Link>
              )}
              {link.subLinks.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="hidden items-center gap-2 outline-none md:flex">
                    <span>{link.name}</span>
                    <IoMdArrowDropdown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-primary mt-8 hidden bg-black text-lg font-semibold md:block">
                    {link.subLinks.map((subLink, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="hover:bg-myOrange cursor-pointer px-4 py-2 transition-all duration-150 ease-in-out hover:text-white"
                      >
                        <Link href={subLink.href}>{subLink.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </li>
          ))}
        </ul>
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-2xl outline-none">
              <HiMenuAlt2 />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-primary mt-8 block bg-black text-lg font-semibold md:hidden">
              {navLinks.map((link, index) => (
                <DropdownMenuItem
                  key={index}
                  className="hover:bg-myOrange ease-ein-out hover:text-primary cursor-pointer px-4 py-2 transition-all duration-300"
                >
                  {link.subLinks.length === 0 && (
                    <Link href={link.href}>{link.name}</Link>
                  )}
                  {link.subLinks.length > 0 && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                        <span>{link.name}</span>
                        <IoMdArrowDropdown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="text-dark mt-4 block bg-white text-lg font-semibold md:hidden">
                        {link.subLinks.map((subLink, index) => (
                          <DropdownMenuItem
                            key={index}
                            className="hover:bg-myOrange ease-ein-out hover:text-primary cursor-pointer px-4 py-2 transition-all duration-300"
                          >
                            <Link href={subLink.href}>{subLink.name}</Link>
                          </DropdownMenuItem>
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
