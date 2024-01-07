"use client";
import Container from "../layout/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Nav() {
  return (
    <nav className="fixed z-50 w-full py-4 backdrop-blur">
      <Container className="flex items-center justify-between text-lg font-semibold tracking-wide">
        <div>IN3</div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                <span>Courses</span>
                <IoMdArrowDropdown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-dark mt-4 bg-white text-lg font-semibold">
                <DropdownMenuItem className="hover:bg-darkGray ease-ein-out cursor-pointer px-4 py-2 transition-all duration-300 hover:text-white">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-darkGray ease-ein-out cursor-pointer px-4 py-2 transition-all duration-300 hover:text-white">
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-darkGray ease-ein-out cursor-pointer px-4 py-2 transition-all duration-300 hover:text-white">
                  Team
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-darkGray ease-ein-out cursor-pointer px-4 py-2 transition-all duration-300 hover:text-white">
                  Subscription
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>Contact Us</li>
        </ul>
      </Container>
    </nav>
  );
}
