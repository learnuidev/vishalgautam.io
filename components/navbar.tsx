"use client";

import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Brain, BriefcaseBusiness, Library, Wand } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <LanguageSwitcher />
          <SignedOut>
            <span>
              <SignInButton>{t("signIn")}</SignInButton>
            </span>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
