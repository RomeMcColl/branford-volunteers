import SearchBtn from "../ui/search-button";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col text-white">
      <div className="bg-about-hero-img h-52 bg-cover bg-[50%_18%] md:h-96 xl:h-[450px]" />
      <div className="relative -top-10 mx-5 flex max-w-4xl flex-col gap-6 bg-branford-600 px-3 pt-8 text-xl md:-top-36 md:mx-auto md:-mb-24 md:px-24">
        <h1 className="text-center text-3xl font-semibold md:text-4xl">
          About Us
        </h1>
        <h2 className="mb-6 text-center text-xl font-semibold">
          Welcome to Branford&apos;s bulletin board for volunteer opportunities.
        </h2>
        <p>
          At BranfordVolunteers.Org, we are dedicated to bridging the gap
          between eager volunteers and nonprofits in need. Our mission is to
          cultivate a spirit of giving by connecting individuals with diverse
          skills and talents to meaningful projects that make a positive impact.
        </p>
        <p>
          As part of the Branford Community Foundation, we believe that everyone
          has the power to contribute to the greater good, and we strive to be
          the catalyst that transforms that belief into action.
        </p>
        <p>
          Whether you&apos;re an individual looking to lend a helping hand or a
          nonprofit seeking dedicated volunteers, we provide a platform for
          collaboration, growth, and collective empowerment.
        </p>
        <p className="mb-3">
          Join us in building a network of change-makers who are committed to
          creating a brighter, more compassionate world. Together, we can turn
          passion into purpose and make a difference that resonates across our
          community.
        </p>
        <SearchBtn />
      </div>
    </main>
  );
}
