// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {


  function handleClick() {
let bodyStyle = document.body.style;
if (bodyStyle.backgroundColor === 'black'){
  bodyStyle.backgroundColor = 'white';
  bodyStyle.color = 'black';
} else {
  bodyStyle.backgroundColor = 'black';
  bodyStyle.color = 'white';
}
  }
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
            <button onClick={() => handleClick()}>Lights on/off</button>
          </nav>
        </main>
      </div>
    </main>
  );
};
export default Navbar;
