"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MyelinLink = () => {
  const path = usePathname();
  return (
    <div className={cn("fixed z-50 bottom-6 left-8")}>
      <Link
        href={path === "/myelin" ? "/" : "/myelin"}
        className="text-2xl font-bold lowercase rounded-full text-pink-500"
      >
        M
      </Link>

      {/* <p>{process?.NODE_ENV}</p> */}
    </div>
  );
};
