import { useParams } from "next/navigation";

export const useLibraryParams = () => {
  const params = useParams<{ "entry-id": string }>();

  return {
    entryId: params?.["entry-id"],
  };
};
