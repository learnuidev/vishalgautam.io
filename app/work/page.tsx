import { Nothing } from "@/components/nothing";

export default function Work() {
  return (
    <div>
      <div className="mt-40">
        <div className="mx-auto max-w-xl mb-12 dark:mb-2 text-center">
          <h1 className="text-4xl mb-3 font-bold tracking-tight">
            Work With Me
          </h1>

          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            You can either have my team develop your next project or seek
            guidance on your coding journey. Feel free to schedule a monthly
            session with me or arrange a one-time consultation.
          </p>
        </div>
      </div>

      <section>
        <Nothing message={"Coming Soon"} />
      </section>
    </div>
  );
}
