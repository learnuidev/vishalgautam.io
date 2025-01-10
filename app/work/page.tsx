import { Nothing } from "@/components/nothing";

const workWithMe = {
  title: "Work With Me",
  description: `Whether you're interested in having me develop your next project or seeking guidance on your coding journey, you can book a monthly session with me or opt for a one-time consultation.`,
};

export default function Work() {
  return (
    <div>
      <div className="mt-40">
        <div className="mx-auto max-w-xl mb-12 dark:mb-2 text-center">
          <h1 className="text-4xl mb-3 font-bold tracking-tight">
            {workWithMe.title}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {workWithMe.description}
          </p>
        </div>
      </div>

      <section>
        <Nothing message={"Coming Soon"} />
      </section>
    </div>
  );
}
