"use client";

import Link from "next/link";
import {
  Moon,
  Sun,
  Library,
  Wand,
  Brain,
  BriefcaseBusiness,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function NavMobile() {
  return (
    <nav className="block sm:hidden">
      <Link href="/">VG</Link>
    </nav>
  );
}

function NavItemLink({
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className={cn("flex flex-col items-center hover:text-rose-400")}
    >
      <span className="uppercase text-sm">{title}</span>
    </Link>
  );

  return (
    <Link
      href={href}
      className={cn("flex flex-col items-center dark:hover:text-white")}
    >
      {children}
      <span className="text-[10px] mt-[2px] uppercase">{title}</span>
    </Link>
  );
}

function NavDesktop() {
  return (
    <nav className="hidden sm:block">
      <div className="flex space-x-12">
        <NavItemLink title="Library" href="/library">
          <span>
            <Library />
          </span>
        </NavItemLink>
        <NavItemLink title="Courses" href="/courses">
          <span>
            <Brain />
          </span>
        </NavItemLink>
        <NavItemLink title="Projects" href="/projects">
          <span>
            <Wand />
          </span>
        </NavItemLink>
        <NavItemLink title="Work With Me" href="/work">
          <span>
            <BriefcaseBusiness />
          </span>
        </NavItemLink>
      </div>
    </nav>
  );
}

export const NavBar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <header className="flex justify-between my-4">
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
