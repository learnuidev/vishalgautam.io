import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/libs/misc/copy-to-clipboard";
import { CopyIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CopyToClipBoardButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const { t } = useTranslation(["common"]);

  const { toast } = useToast();
  return (
    <button
      onClick={() => {
        copyToClipboard(text).then(() => {
          toast({
            title: t("copyToClipboard.title", "Tada 🎉"),
            description: t(
              "copyToClipboard.description",
              "Copied to clipboard"
            ),
          });
        });
      }}
      className={cn(className)}
    >
      <CopyIcon size={16} className="hover:opacity-60 transition-all" />
    </button>
  );
};
