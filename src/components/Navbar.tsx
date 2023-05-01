// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <main>
        <div className='{navbar.container}'>
      <main>
        <nav className='nav'>
          <a> <Link href="/">Home </Link> </a>
          <a> <Link href="/projects">Projects</Link></a>
          <a> <Link href="/about"> About </Link></a>
          <a> <Link href="/about"> Thirsty </Link></a>
        </nav>
      </main>
    </div>
    </main>
      
  );
};
export default Navbar;
