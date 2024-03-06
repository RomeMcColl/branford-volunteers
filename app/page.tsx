import Hero from "./ui/home/hero";

const categories = [
  "food insecurity",
  "education",
  "disabilities",
  "environment",
  "seniors",
  "health care",
  "public safety",
  "child advocacy",
  "housing",
  "arts & culture",
  "veterans",
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center text-white">
      <Hero />
      <section className="flex flex-col items-center">
        <div className="pb-6 pt-14">
          <h2 className="mb-1 text-3xl text-branford-100 underline md:text-4xl">
            Did You Know?
          </h2>
          <p className="flex flex-col text-center text-lg md:text-xl">
            <span>There are nearly 200</span>
            <span>Branford-based</span>
            <span>nonprofits.</span>
          </p>
        </div>
      </section>
      {/* Images */}
      <section className="flex flex-col items-center p-4">
        <div className="flex-1 rounded-xl border-2 p-3">
          <ul className="h-50 grid list-disc grid-cols-2 gap-x-7 gap-y-2 pl-5 text-lg sm:grid-cols-3 sm:gap-x-12 sm:text-xl md:text-2xl">
            {categories.map((item) => (
              <li className="" key={item}>
                {item}
              </li>
            ))}
            <li className="">and more...</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
