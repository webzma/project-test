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

        <h2 className="text-black text-4xl uppercase pt-20 pb-8 text-center">
          Featured Properties
        </h2>
      </div>
    </div>
  );
}
