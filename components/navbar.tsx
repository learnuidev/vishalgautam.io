"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function NavMobile() {
  return (
    <nav className="block sm:hidden">
      <Link href="/" className="font-bold">
        VG
      </Link>
    </nav>
  );
}

function NavDesktop() {
  return (
    <nav className="hidden sm:block space-x-8">
      <Link href="/" className="font-bold">
        Library
      </Link>
      <Link href="/" className="font-bold">
        Courses
      </Link>
      <Link href="/" className="font-bold">
        With With Me
      </Link>
      <Link href="/" className="font-bold">
        Contact
      </Link>
    </nav>
  );
}

export const NavBar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <header className="flex justify-between">
      {" "}
      <Link href="/" className="font-bold hidden sm:block">
        VG
      </Link>
      <>
        <NavDesktop />
        <NavMobile />
      </>
      <button
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </header>
  );
};
