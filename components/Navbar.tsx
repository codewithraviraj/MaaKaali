"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <nav
        className="bg-white shadow-md p-4 fixed text-gray-800 flex justify-between top-0 left-0 w-full z-50"
        ref={menuRef}
      >
        <div className="flex items-center space-x-2">
          <Image src="/icons/logo.png" alt="logo" width={30} height={50} />
          <h1 className="text-s sm:text-s font-bold">
            Welcome to Maa Kaali balajee Babosaaa Mandir
          </h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            AboutUs
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            contact Us
          </Link>
          <Link href="/donate" className="hover:text-yellow-400">
            Donate
          </Link>
          <Link href="/donated" className="hover:text-yellow-400">
            Donated
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <Image src="" alt="menu-logo" width={30} height={30} />
        </button>
      </nav>
    </>
  );
};
export default Navbar;
