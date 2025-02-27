import { useTranslation } from "@/libs/i18n-next/use-translation";
import { useState } from "react";

const subscribe = async ({
  email,
  subscriptionId,
}: {
  email: string;
  subscriptionId: string;
}) => {
  const resp = await fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({
      email,
      subscriptionId,
    }),
  });

  return resp.json();
};

export const NewsLetterSubscriptionForm = () => {
  const { t } = useTranslation(["subscriptionForm"]);
  const [email, setEmail] = useState("");
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    subscribe({
      email,
      subscriptionId: "newsletter",
    }).then((resp) => {
      alert(JSON.stringify(resp));
      setEmail("");
    });
  };
  return (
    <section className="dark:bg-[rgb(14,15,16)] bg-gray-100 mt-12 h-56 sm:h-48 transition-height relative rounded-3xl bg-gradient-to-br from-react to-react-link px-8 py-9 sm:px-12 sm:pt-10 sm:pb-16 duration-500 shadow-lg">
      <h4 className="text-xl font-bold">{t("subscriptionForm:title")}</h4>
      <p className="text-sm text-gray-400 mb-5">
        {t("subscriptionForm:description")}
      </p>

      <form onSubmit={submitForm}>
        <div className="flex bg-white dark:bg-[rgb(10,11,12)] flex-col gap-2 rounded-md focus-within:border-slate-300 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:border sm:border-slate-500 dark:sm:border-slate-800 sm:p-1">
          <input
            type="text"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            className="grow rounded-md border border-slate-500 bg-transparent px-3 py-1 dark:text-white outline-none placeholder:text-gray-500 focus-within:border-slate-300 sm:border-none"
            placeholder="your@email.com"
          />
          <button
            type="submit"
            className="flex h-8 items-center justify-center rounded-md bg-slate-800 px-5 py-1 font-medium tracking-wide text-white transition-colors hover:cursor-pointer hover:text-react-link disabled:cursor-not-allowed disabled:hover:text-white"
          >
            {t("subscriptionForm:button.title")}
          </button>
        </div>
      </form>
    </section>
  );
};
