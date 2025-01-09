const homeBanner = {
  title: "Yo, I'm Vishal",
  description:
    "Welcome. I'm a software developer and content creator from Canada. Here, I share what I've been working on recently and things I've learned along the way.",
};

export default function Home() {
  return (
    <div className="mt-32">
      <section>
        <h2 className="text-2xl font-bold">{homeBanner.title}</h2>
        <p className="dark:text-gray-400 mt-4">{homeBanner.description}</p>
      </section>
    </div>
  );
}
