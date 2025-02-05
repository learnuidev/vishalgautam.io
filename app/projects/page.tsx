import { projectsList } from "./constants/projects-list";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mt-40">
      <h1 className="text-2xl font-bold mb-12">Projects</h1>{" "}
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {projectsList.map((project) => {
          return (
            <div
              key={project.id}
              className="rounded-2xl p-4 bg-gray-100 dark:bg-[rgb(22,23,24)]"
            >
              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className=" text-gray-500 font-light">
                  {" "}
                  {project.description}
                </p>
              </div>

              <Link
                className="rounded-full text-sm mt-4 inline-block dark:bg-white bg-black dark:text-black text-white px-4 py-1"
                href={project.link}
                target="_blank"
              >
                View
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
