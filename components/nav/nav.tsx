"use client";
import Container from "../layout/container";

export default function Nav() {
  return (
    <nav className="fixed z-50 w-full py-4 backdrop-blur">
      <Container className="flex items-center justify-between font-semibold tracking-wide">
        <div>IN3</div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Contact Us</li>
        </ul>
      </Container>
    </nav>
  );
}
