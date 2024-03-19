"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";
import NavItems from "@/components/other/NavItems";
import { Separator } from "@/components/ui/separator";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useGSAP(() => {
    gsap.to("#main-txt, .items", {
      opacity: 1,
      delay: 0.5,
      ease: "power2.inOut",
    });
    gsap.to("#nav-box", {
      boxShadow: `0px 0px 10px yellow`,
      delay: 0.5,
      ease:'power2.inOut',
    });
  }, []);
  return (
    <nav
      id="nav-box"
      className={cn({
      "z-40 absolute shadow-primary flex items-center justify-between py-2 tracking-wide w-full px-4 lg:px-12": true,
      "bg-transparent": isSidebarOpen,
      "backdrop-blur-2xl": !isSidebarOpen,
    })}
    >
      <div className="flex items-center justify-center">
        <Link
          id="main-txt"
          href={"/"}
          className="opacity-0 text-3xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.400),theme(colors.yellow.300),theme(colors.orange.200),theme(colors.yellow.300),theme(colors.yellow.400))] bg-[length:200%_auto] animate-gradient"
        >
          NIRMAAN
        </Link>
      </div>

      {/* for Desktop view */}
      <div className="items opacity-0 hidden lg:flex items-center justify-center gap-6 text-2xl">
        <NavItems />
        <Separator orientation="vertical" />
        <Link
          className="ml-4 hover:text-yellow-400 transition-colors ease-in-out delay-100 duration-150"
          href={"https://forms.gle/d4FyyGoQ7oRrAn3z7"}
        >
          <Button className="p-6 text-xl" variant={"outline"}>
            Register
          </Button>
        </Link>
      </div>

      {/* for Mobile view */}
      <div
        className="lg:hidden cursor-pointer p-2 hover:bg-slate-800 rounded-full items opacity-0"
        onClick={toggleSidebar}
      >
        <RiMenu4Fill className="w-8 h-8" />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-blur z-99">
          <div className="flex flex-col items-end justify-between h-full py-8 px-6">
            <div
              className="self-end cursor-pointer p-2 hover:bg-slate-800 rounded-full"
              onClick={toggleSidebar}
            >
              <RxCross2 className="w-8 h-8 text-red-600" />
            </div>

            <div className="flex flex-col items-end justify-center gap-8">
              <Link className="sidebar-text gradient-text" href={"/"}>
                <div onClick={toggleSidebar}>Home</div>
              </Link>
              <Link className="sidebar-text gradient-text" href={"#about"}>
                <div onClick={toggleSidebar}>About Us</div>
              </Link>
              <Link className="sidebar-text gradient-text" href={"#hackathon"}>
                <div onClick={toggleSidebar}>Hackathon</div>
              </Link>
              <Link className="sidebar-text gradient-text" href={"#esports"}>
                <div onClick={toggleSidebar}>E-Sports</div>
              </Link>
              <Link className="sidebar-text gradient-text" href={"#themes"}>
                <div onClick={toggleSidebar}>Themes</div>
              </Link>
              <Link
                className="sidebar-text gradient-text"
                href={"https://forms.gle/d4FyyGoQ7oRrAn3z7"}
              >
                <div onClick={toggleSidebar}>Register Now ↗</div>
              </Link>
            </div>

            <div className="text-lg select-none opacity-50">
              <p>© Copyright 2024 Poornima University</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
