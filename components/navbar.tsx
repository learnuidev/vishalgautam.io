"use client";
import useSound from "use-sound";

import Link from "next/link";
import {
  Moon,
  Sun,
  Library,
  Wand,
  Brain,
  BriefcaseBusiness,
  Volume2,
  Volume,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState(false);

  const switchOffUrl = `https://nomadmethod-api-dev-assetsbucket-2u2iqsv5nizc.s3.us-east-1.amazonaws.com/learnuidev@gmail.com/01JH6X1JMEACXMV4CY8ZSHTC0D.m4a`;
  const switchOnUrl = `https://nomadmethod-api-dev-assetsbucket-2u2iqsv5nizc.s3.us-east-1.amazonaws.com/learnuidev@gmail.com/01JH6X19QJ68E06NA827N5WSTQ.m4a`;

  const musicUrl =
    "https://nomadmethod-api-dev-assetsbucket-2u2iqsv5nizc.s3.us-east-1.amazonaws.com/learnuidev@gmail.com/01JH6XXBGT3NXBE50425NY5YNY.mp3";
  const [playMusic, { pause }] = useSound(musicUrl);
  const [playSwitchOff] = useSound(switchOffUrl);
  const [playSwitchOn] = useSound(switchOnUrl);

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
            if (isPlaying) {
              pause();
              setIsPlaying(false);
            } else {
              playMusic();
              setIsPlaying(true);
            }
          }}
        >
          {isPlaying ? <Volume /> : <Volume2 />}
        </button>
        <button
          onClick={() => {
            setTheme((prev) => {
              if (prev === "light") {
                playSwitchOff();
                return "dark";
              }
              playSwitchOn();
              return "light";
            });
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
