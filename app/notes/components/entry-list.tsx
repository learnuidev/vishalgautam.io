import Link from "next/link";
import { Entry } from "../state/entries";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const EntryList = ({
  entries,
  onTagClick,
  className,
}: {
  entries: Entry[];
  className?: string;
  onTagClick?: (tag: string) => void;
}) => {
  return (
    <div className={cn("mt-8 space-y-8", className)}>
      {entries.map((entry) => {
        return (
          <li
            key={JSON.stringify(entry)}
            className="list-none bg-gray-50 p-4 dark:bg-[rgb(14,15,16)] rounded-xl"
          >
            <Link href={`/notes/${entry?.slug}`}>
              <h4 className="font-semibold">{entry.title}</h4>
              <p className="text-gray-500"> {entry.description}</p>
            </Link>
            <div className="space-x-2">
              {entry.tags.map((tag) => {
                return (
                  <Badge
                    onClick={() => {
                      onTagClick?.(tag);
                    }}
                    variant={"outline"}
                    className="mt-2 dark:text-gray-600 text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
                    key={`${tag}-${entry.id}`}
                  >
                    {tag}
                  </Badge>
                );
              })}
            </div>
          </li>
        );
      })}
    </div>
  );
};
