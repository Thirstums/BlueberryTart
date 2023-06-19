// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <main>
      <div className="{navbar.container}">
        <main>
          <nav className="nav">
            <Image
              src="/BlueberryTartLogo.png"
              alt="BlueberryTartLogo"
              width={50}
              height={50}
            />
            <a>
              {" "}
              <Link href="/">Home </Link>{" "}
            </a>
            <a>
              {" "}
              <Link href="/projects">Projects</Link>
            </a>
            <a>
              {" "}
              <Link href="/recepies">Recepies</Link>
            </a>
          </nav>
        </main>
      </div>
    </main>
  );
};
export default Navbar;
