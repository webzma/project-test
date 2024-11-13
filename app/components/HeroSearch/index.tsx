import { useState } from "react";

export default function HeroSearch() {
  const [isBuy, setIsBuy] = useState(true);

  return (
    <div className="max-w-[950px] w-[90%] mx-auto flex flex-col gap-y-4">
      <div className="flex items-center [&>button]:p-4 text-base lg:hidden mt-8">
        <button
          className={`pb-4 ${
            isBuy ? "border-b-2 border-[#DFB66A] text-white" : "text-[#D5DBE2]"
          }`}
          onClick={() => setIsBuy(true)}
        >
          Buy
        </button>
        <button
          className={`pb-4 ${
            !isBuy
              ? "border-b-2 border-[#DFB66A] text-white"
              : "text-[#D5DBE2] "
          }`}
          onClick={() => setIsBuy(false)}
        >
          Rent
        </button>
      </div>

      <div className="pl-4 flex items-center  mt-10 backdrop-blur-md bg-black/30  border-b border-[#DFB66A]">
        <div className="lg:flex items-center [&>button]:p-6 text-base h-full hidden">
          <button
            className={`pb-4 ${
              isBuy
                ? "border-b-2 border-[#DFB66A] text-white"
                : "text-[#D5DBE2]"
            }`}
            onClick={() => setIsBuy(true)}
          >
            Buy
          </button>
          <button
            className={`pb-4 ${
              !isBuy
                ? "border-b-2 border-[#DFB66A] text-white"
                : "text-[#D5DBE2] "
            }`}
            onClick={() => setIsBuy(false)}
          >
            Rent
          </button>
        </div>

        <div className="lg:flex items-center gap-x-4 px-4 justify-center w-[400px] hidden">
          {/* Esto es un select */}
          <p className="text-md">Property Type</p>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1922 7.94205L10.9422 14.192C10.8841 14.2502 10.8152 14.2963 10.7393 14.3277C10.6634 14.3592 10.5821 14.3754 10.5 14.3754C10.4178 14.3754 10.3365 14.3592 10.2606 14.3277C10.1848 14.2963 10.1158 14.2502 10.0578 14.192L3.80779 7.94205C3.69052 7.82477 3.62463 7.66571 3.62463 7.49986C3.62463 7.33401 3.69052 7.17495 3.80779 7.05767C3.92507 6.9404 4.08413 6.87451 4.24998 6.87451C4.41583 6.87451 4.57489 6.9404 4.69217 7.05767L10.5 12.8663L16.3078 7.05767C16.3659 6.9996 16.4348 6.95354 16.5107 6.92211C16.5865 6.89069 16.6679 6.87451 16.75 6.87451C16.8321 6.87451 16.9134 6.89069 16.9893 6.92211C17.0652 6.95354 17.1341 6.9996 17.1922 7.05767C17.2502 7.11574 17.2963 7.18468 17.3277 7.26055C17.3592 7.33642 17.3753 7.41774 17.3753 7.49986C17.3753 7.58198 17.3592 7.6633 17.3277 7.73917C17.2963 7.81504 17.2502 7.88398 17.1922 7.94205Z"
              fill="#D5DBE2"
            />
          </svg>
        </div>

        <div className="flex gap-x-2 items-center w-full">
          <svg
            width="30"
            height="30"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 15C12.7018 15 15.5 12.2018 15.5 8.75C15.5 5.29822 12.7018 2.5 9.25 2.5C5.79822 2.5 3 5.29822 3 8.75C3 12.2018 5.79822 15 9.25 15Z"
              stroke="#D5DBE2"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6696 13.1694L18 17.4999"
              stroke="#D5DBE2"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            placeholder="Search by area or location"
            className="bg-transparent placeholder:text-white placeholder:text-md border w-full p-2 outline-none border-none"
          />
        </div>

        <button className="h-full uppercase  py-4 px-8  lg:py-6 lg:px-12 bg-[radial-gradient(circle,_#DFB66A,_#D4983B)] flex items-center gap-x-2">
          <span className="hidden lg:flex">Search</span>
          <img
            src="/arrow-search.svg"
            alt="Arrow search"
            className="size-6 hidden md:flex"
          />
          <img
            src="/search-icon.svg"
            alt="Arrow search"
            className="size-6 md:hidden flex"
          />
        </button>
      </div>

      <p className="text-[15px] uppercase mt-4">List your property here</p>
    </div>
  );
}
