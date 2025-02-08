import { cn } from "@/lib/utils";
import Link from "next/link";

export const MyelinLink = () => {
  return (
    <div className={cn("fixed z-50 bottom-6 right-8")}>
      <Link
        href="/myelin"
        className="text-2xl font-bold lowercase rounded-full text-pink-500"
      >
        M
      </Link>

      {/* <p>{process?.NODE_ENV}</p> */}
    </div>
  );
};
