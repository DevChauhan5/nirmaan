"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";
import NavItems from "@/components/other/NavItems";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className="z-40 absolute bg-background shadow-md shadow-primary flex items-center justify-between py-4 tracking-wide w-full px-4 lg:px-12">
      <div className="flex items-center justify-center">
        <Link href={"/"} className="text-3xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.violet.400),theme(colors.violet.300),theme(colors.violet.200),theme(colors.violet.300),theme(colors.violet.400))] bg-[length:200%_auto] animate-gradient">
          NIRMAAN&apos;24
        </Link>
      </div>

      {/* for Desktop view */}
      <div className="hidden lg:flex items-center justify-center gap-6 text-2xl">
        <NavItems />
        <Separator orientation="vertical" />
        <Link
          className="ml-4 hover:text-yellow-400 transition-colors ease-in-out delay-100 duration-150"
          href={"/"}
        >
          <Button className="p-6 text-xl" variant={"outline"}>
            Register
          </Button>
        </Link>
      </div>

      {/* for Mobile view */}
      <div
        className="lg:hidden cursor-pointer p-2 hover:bg-slate-800 rounded-full"
        onClick={toggleSidebar}
      >
        <RiMenu4Fill className="w-8 h-8" />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-background text-white z-50">
          <div className="flex flex-col items-end justify-between h-full py-8 px-6">
            <div
              className="self-end cursor-pointer p-2 hover:bg-slate-800 rounded-full"
              onClick={toggleSidebar}
            >
              <RxCross2 className="w-8 h-8 text-red-600" />
            </div>

            <div className="flex flex-col items-end justify-center gap-8">
              <Link className="sidebar-text" href={"/"}>
                <div onClick={toggleSidebar}>Home</div>
              </Link>
              <Link className="sidebar-text" href={"#about"}>
                <div onClick={toggleSidebar}>AboutUs</div>
              </Link>
              <Link className="sidebar-text" href={"#hackathon"}>
                <div onClick={toggleSidebar}>Hackathon</div>
              </Link>
              <Link className="sidebar-text" href={"#events"}>
                <div onClick={toggleSidebar}>Events</div>
              </Link>
              <Link className="sidebar-text" href={"/"}>
                <div onClick={toggleSidebar}>Register Now ↗️</div>
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
