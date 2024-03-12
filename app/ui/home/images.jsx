export default function Images() {
  const layers = {
    first: [
      [1, "w-1/5"],
      [2, "w-2/5"],
      [3, "w-2/5"],
    ],
    second: [
      [2, "w-2/5"],
      [3, "w-2/5"],
      [1, "w-1/5"],
    ],
    middle: [
      [1, "w-1/6"],
      [2, "w-2/3"],
      [3, "w-1/6"],
    ],
    secondLast: [
      [1, "w-1/3"],
      [2, "w-1/3"],
      [3, "w-1/3"],
    ],
    last: [
      [1, "w-1/2"],
      [2, "w-1/2"],
    ],
  };

  return (
    <section className="">
      <div className="ml-auto flex w-[min(100%,_550px)] min-w-80">
        {layers.first.map(([key, width]) => (
          <div key={key} className={`h-28 ${width}`}>
            <div className="bg-hero-vert h-full bg-cover bg-center" />
          </div>
        ))}
      </div>
      <div className="ml-auto mr-auto hidden w-[min(100%,_550px)] md:flex lg:mr-[22%]">
        {layers.second.map(([key, width]) => (
          <div key={key} className={`h-28 ${width}`}>
            <div className="bg-hero-vert h-full bg-cover bg-center" />
          </div>
        ))}
      </div>

      <div className="mx-auto hidden w-[min(100%,_550px)] 2xl:flex">
        {layers.middle.map(([key, width]) => (
          <div key={key} className={`h-28 ${width}`}>
            <div className="bg-hero-vert h-full bg-cover bg-center" />
          </div>
        ))}
      </div>
      <div className="ml-[22%] mr-auto hidden w-[min(100%,_550px)] xl:flex">
        {layers.secondLast.map(([key, width]) => (
          <div key={key} className={`h-28 ${width}`}>
            <div className="bg-hero-vert h-full bg-cover bg-center" />
          </div>
        ))}
      </div>
      <div className="mr-auto flex w-[min(100%,_550px)]">
        {layers.last.map(([key, width]) => (
          <div key={key} className={`h-28 ${width}`}>
            <div className="bg-hero-vert h-full bg-cover bg-center" />
          </div>
        ))}
      </div>
    </section>
  );
}
