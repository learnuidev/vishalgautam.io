import { Bird } from "lucide-react";

export const Nothing = () => {
  return (
    <section className="flex justify-between flex-col items-center mt-32">
      <Bird size={64} />
      <p className="text-2xl text-gray-500 font-light">Nothing found</p>
    </section>
  );
};
