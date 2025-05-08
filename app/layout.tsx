"use client";
import type { Metadata } from "next";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const  Metadata = {
  title: "Maa Kali Shree Balajee Babosaa Mandir",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const[isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    }, 2000);
    return()=> clearTimeout(timer);
  })
  return (
    <html lang="en">
      <body
        className=" flex flex-col min-h-screen"
      >
        {isLoading?(
          <Loader/>
        ):(
          <>
          <Navbar/>
          <main className="flex-grow pt-15 md:pt-15 pb-20">{children}</main>
          <Footer/>
          </>
        )}
      </body>
    </html>
  );
}
