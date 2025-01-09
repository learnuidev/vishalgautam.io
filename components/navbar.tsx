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
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

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
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center hover:text-rose-400 transition",
        pathName?.includes(href)
          ? "text-rose-400 border-b-2 border-rose-400"
          : "dark:text-gray-400 text-gray-600"
      )}
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
      <div className="flex space-x-12 items-center">
        <NavItemLink title="Library" href="/library">
          <Library />
        </NavItemLink>
        <NavItemLink title="Courses" href="/courses">
          <Brain />
        </NavItemLink>
        <NavItemLink title="Projects" href="/projects">
          <Wand />
        </NavItemLink>
        <NavItemLink title="Work With Me" href="/work">
          <BriefcaseBusiness />
        </NavItemLink>
      </div>
    </nav>
  );
}

export const NavBar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex justify-between my-4 items-center">
      {" "}
      <Link href="/" className="font-bold hidden sm:block">
        VG
      </Link>
      <>
        <NavDesktop />
        <NavMobile />
      </>
      <div className="space-x-6 flex items-center">
        <button
          onClick={() => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
          }}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
        <SignedOut>
          <Button variant="outline">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
