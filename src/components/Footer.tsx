// components/Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div> 
      By <Image
                src="/BlueberryTartLogo.png"
                 alt="BlueberryTartLogo"
                 width={50}
                 height={50}
        
                />
    </div>
  );
};
export default Footer;
