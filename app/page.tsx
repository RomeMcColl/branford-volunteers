import Hero from "./ui/home/hero";
import SearchBtn from "./ui/search-button";

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
      <section className="bg-white p-4 text-branford-600">
        <div className="flex gap-1 text-5xl font-semibold">
          <p>&ldquo;</p>
          <p className="w-52 text-3xl font-medium">
            Service to others is the rent you pay for your room here on Earth.
          </p>
          <p className="self-end">&rdquo;</p>
        </div>
        <p className="mt-3 text-right text-2xl font-medium">- Muhammad Ali</p>
      </section>
      <section className="flex flex-col items-center justify-evenly gap-8 p-10 font-semibold sm:flex-row">
        <p>
          Whether you can give an hour, a day, <br />
          or a lifetime, find your opportunity <br />
          to give back to your community.
        </p>
        <div className="flex w-72">
          <SearchBtn />
        </div>
      </section>
    </main>
  );
}
