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
import { useTranslation } from "@/libs/i18n-next/use-translation";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";

const switchUrl = `https://nomadmethod-api-dev-assetsbucket-2u2iqsv5nizc.s3.us-east-1.amazonaws.com/learnuidev@gmail.com/01JH6X1JMEACXMV4CY8ZSHTC0D.m4a`;

const musicUrl =
  "https://nomadmethod-api-dev-assetsbucket-2u2iqsv5nizc.s3.us-east-1.amazonaws.com/learnuidev@gmail.com/01JH6XXBGT3NXBE50425NY5YNY.mp3";

function NavMobile() {
  return (
    <nav className="block sm:hidden">
      <Link href="/" className="font-bold text-4xl">
        <h6>VG</h6>
      </Link>
    </nav>
  );
}

function NavItemLink({
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
        "flex flex-col items-center hover:text-rose-400 dark:hover:text-white transition",
        pathName?.includes(href)
          ? "dark:text-white text-rose-400 border-b-2 border-rose-400"
          : "dark:text-gray-400 text-gray-600"
      )}
    >
      <span className="uppercase text-sm">{title}</span>
    </Link>
  );
}

function NavDesktop() {
  const { t } = useTranslation("navbar");
  return (
    <nav className="hidden sm:block">
      <div className="flex space-x-12 items-center">
        <NavItemLink title={t("notes")} href="/notes">
          <Library />
        </NavItemLink>
        <NavItemLink title={t("courses")} href="/courses">
          <Brain />
        </NavItemLink>
        <NavItemLink title={t("projects")} href="/projects">
          <Wand />
        </NavItemLink>
        <NavItemLink title={t("workWithMe")} href="/work">
          <BriefcaseBusiness />
        </NavItemLink>
      </div>
    </nav>
  );
}

export const NavBar = () => {
  const { setTheme, theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const [playMusic, { pause }] = useSound(musicUrl);
  const [playSwitch] = useSound(switchUrl);

  const { t } = useTranslation("common");

  return (
    <header className="fixed top-0 w-full z-30 dark:bg-[rgb(9,10,11)]/75 bg-white/75 dark:bg-react/75 backdrop-blur-sm">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {" "}
        <Link href="/" className="font-bold hidden sm:block text-4xl">
          <h6>VG</h6>
        </Link>
        <>
          <NavDesktop />
          <NavMobile />
        </>
        <div className="space-x-4 flex items-center">
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
            {isPlaying ? <Volume2 /> : <Volume />}
          </button>
          <button
            onClick={() => {
              setTheme((prev) => {
                playSwitch();
                if (prev === "light") {
                  return "dark";
                }
                return "light";
              });
            }}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <SignedOut>
            <Button variant="outline">
              <SignInButton>{t("signIn")}</SignInButton>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
