import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Project Test" },
    {
      name: "Project test for my second job",
      content: "Welcome to second job!",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-full items-center flex-col justify-center relative ">
      <div className="w-full h-screen absolute top-0 left-0 -z-10">
        <video
          src="/video.mp4"
          autoPlay={true}
          loop
          height={785}
          className="object-cover w-full h-full top-0 left-0  absolute -z-10"
          onError={(e) => console.error("Error loading video:", e)}
        >
          <track
            src="/captions.vtt"
            kind="captions"
            srcLang="en"
            label="English captions"
          />
          Your browser does not support the video tag.
        </video>
        <Hero />

        <section className="pb-20">
          <h2 className="text-[#47413C] text-4xl uppercase pt-20 pb-16 text-center">
            Featured Properties
          </h2>

          <div className="grid lg:grid-cols-3 2xl:grid-cols-5 grid-cols-1 md:grid-cols-2 gap-x-8  border-black max-w-[95%] mx-auto">
            <article className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-3">
                <p className="uppercase text-[#272421] text-[22px]">
                  Green Acres
                </p>
                <p className="text-[#47413C] ">
                  <span className="uppercase">For rent </span>
                  in
                  <span> Address Title line</span>
                </p>
                <div className="flex justify-between items-center [&>div]:text-[#424E62]">
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="/bed.svg" alt="Bed icon" />3 Beds
                  </div>
                  <div className="uppercase flex items-center gap-x-2">
                    <img src="/toilet.svg" alt="Toilet Icon" />1 Baths
                  </div>
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="./SQFT.svg" alt="SQFT Icon" />
                    10.372 SQ.FT
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="./property-1.jpg"
                  alt="property"
                  className="w-full object-cover"
                />
              </div>

              <footer className="flex justify-between text-[#47413C]">
                <p>
                  AED <span>2,038,000</span>
                </p>

                <a href="/properties" className="uppercase">
                  See property
                </a>
              </footer>
            </article>

            <article className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-3">
                <p className="uppercase text-[#272421] text-[22px]">
                  Residents Zabeel
                </p>
                <p className="text-[#47413C] ">
                  <span className="uppercase">For sale </span>
                  in
                  <span> Zabeel, Dubai, Unit...</span>
                </p>
                <div className="flex justify-between items-center [&>div]:text-[#424E62]">
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="/bed.svg" alt="Bed icon" />3 Beds
                  </div>
                  <div className="uppercase flex items-center gap-x-2">
                    <img src="/toilet.svg" alt="Toilet Icon" />1 Baths
                  </div>
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="./SQFT.svg" alt="SQFT Icon" />
                    10.372 SQ.FT
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="./property-2.jpg"
                  alt="property"
                  className="w-full object-cover"
                />
              </div>

              <footer className="flex justify-between text-[#47413C]">
                <p>
                  AED <span>1,800,000</span>
                </p>

                <a href="/properties" className="uppercase">
                  See property
                </a>
              </footer>
            </article>

            <article className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-3">
                <p className="uppercase text-[#272421] text-[22px]">
                  DAMAC Canal Crown
                </p>
                <p className="text-[#47413C] ">
                  <span className="uppercase">For rent </span>
                  in
                  <span> Canal Walk, Business Bay...</span>
                </p>
                <div className="flex justify-between items-center [&>div]:text-[#424E62]">
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="/bed.svg" alt="Bed icon" />3 Beds
                  </div>
                  <div className="uppercase flex items-center gap-x-2">
                    <img src="/toilet.svg" alt="Toilet Icon" />1 Baths
                  </div>
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="./SQFT.svg" alt="SQFT Icon" />
                    10.372 SQ.FT
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="./property-3.jpg"
                  alt="property"
                  className="w-full object-cover"
                />
              </div>

              <footer className="flex justify-between text-[#47413C]">
                <p>
                  AED <span>1,120,000</span>
                </p>

                <a href="/properties" className="uppercase">
                  See property
                </a>
              </footer>
            </article>

            <article className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-3">
                <p className="uppercase text-[#272421] text-[22px]">
                  Green Acres
                </p>
                <p className="text-[#47413C] ">
                  <span className="uppercase">For rent </span>
                  in
                  <span> Address Title line</span>
                </p>
                <div className="flex justify-between items-center [&>div]:text-[#424E62]">
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="/bed.svg" alt="Bed icon" />3 Beds
                  </div>
                  <div className="uppercase flex items-center gap-x-2">
                    <img src="/toilet.svg" alt="Toilet Icon" />1 Baths
                  </div>
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="./SQFT.svg" alt="SQFT Icon" />
                    10.372 SQ.FT
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="./property-4.jpg"
                  alt="property"
                  className="w-full object-cover"
                />
              </div>

              <footer className="flex justify-between text-[#47413C]">
                <p>
                  AED <span>979,000</span>
                </p>

                <a href="/properties" className="uppercase">
                  See property
                </a>
              </footer>
            </article>

            <article className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-3">
                <p className="uppercase text-[#272421] text-[22px]">
                  Green Acres
                </p>
                <p className="text-[#47413C] ">
                  <span className="uppercase">For rent </span>
                  in
                  <span> Address Title line</span>
                </p>
                <div className="flex justify-between items-center [&>div]:text-[#424E62]">
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="/bed.svg" alt="Bed icon" />3 Beds
                  </div>
                  <div className="uppercase flex items-center gap-x-2">
                    <img src="/toilet.svg" alt="Toilet Icon" />1 Baths
                  </div>
                  <div className="uppercase flex gap-x-2 items-center">
                    <img src="./SQFT.svg" alt="SQFT Icon" />
                    10.372 SQ.FT
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="./property-4.jpg"
                  alt="property"
                  className="w-full object-cover"
                />
              </div>

              <footer className="flex justify-between text-[#47413C]">
                <p>
                  AED <span>979,000</span>
                </p>

                <a href="/properties" className="uppercase">
                  See property
                </a>
              </footer>
            </article>
          </div>
        </section>

        <div className="mx-auto max-w-[750px] w-[80%] text-[#47413C] py-8 flex flex-col gap-y-6">
          <div className="flex items-center justify-between flex-col gap-y-6  md:flex-row [&>button]:uppercase [&>button]:flex [&>button]:items-center [&>button]:gap-x-2">
            <button>
              <img src="/caret-left.svg" alt="Arrow left icon" />
              Prev
            </button>

            <div className="bg-[#F8F2DC] h-1 w-[65%]">
              <div className="w-[100px] bg-[#DFB66A] h-full"></div>
            </div>

            <button>
              Next
              <img src="/caret-right.svg" alt="Arrow rigth icon" />
            </button>
          </div>
          <div className="mx-auto">
            <p>1/6</p>
          </div>
        </div>
      </div>
    </div>
  );
}
