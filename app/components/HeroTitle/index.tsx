export default function HeroTitle() {
  return (
    <div className="m-auto  flex justify-center flex-col items-center gap-y-4 pt-12 lg:pt-32">
      <div className="flex flex-col gap-y-6">
        <p className="text-xl uppercase">
          <span className="mr-4">4.9</span>Star rated
        </p>

        <div className="border-b-2 border-white w-[60px] ml-14 mx-auto"></div>
      </div>

      <h1 className="uppercase text-[64px] md:text-[86px] text-center leading-none">
        Nextstate Realty
      </h1>
      <p className="text-lg text-center">
        High-End Real Estate Solutions for Discerning Investors
      </p>
    </div>
  );
}
