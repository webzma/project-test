import { useState } from "react";

const propertiesData = [
  {
    id: 1,
    title: "Grenn Acres",
    description: "A beautiful family house located in the suburbs.",
    price: "705000",
    image: "property-6.jpg",
    operation: "rent",
  },
  {
    id: 2,
    title: "Dubai Marina",
    description: "A modern apartment in the city center.",
    price: "705000",
    image: "property-7.jpg",
    operation: "rent",
  },
  {
    id: 3,
    title: "Residents Zabeel",
    description: "A cozy cottage in the countryside.",
    price: "705000",
    image: "property-8.jpg",

    operation: "sale",
  },
  {
    id: 4,
    title: "Brand New",
    description: "A luxury villa with a private pool.",
    price: "705000",
    image: "property-9.jpg",

    operation: "rent",
  },
  {
    id: 5,
    title: "Exclusive | Top flor",
    description: "A luxury villa with a private pool.",
    price: "705000",
    image: "property-10.jpg",

    operation: "sale",
  },
  {
    id: 6,
    title: "Forat | Completely Upgrade",
    description: "A luxury villa with a private pool.",
    price: "705000",
    image: "property-11.jpg",

    operation: "rent",
  },
  {
    id: 7,
    title: "Developers Offer Free Repairs",
    description: "A luxury villa with a private pool.",
    price: "705000",
    image: "property-12.jpg",
    operation: "rent",
  },

  {
    id: 8,
    title: "Forat | Completely Upgrade",
    description: "A luxury villa with a private pool.",
    price: "705000",
    image: "property-11.jpg",

    operation: "rent",
  },
  {
    id: 9,
    title: "Brand New",
    description: "A luxury villa with a private pool.",
    price: "705000",
    image: "property-9.jpg",
    operation: "sale",
  },
  {
    id: 10,
    title: "Grenn Acres",
    description: "A beautiful family house located in the suburbs.",
    price: "705000",
    image: "property-6.jpg",
    operation: "rent",
  },
  {
    id: 11,
    title: "Exclusive | Top flor",
    description: "A luxury villa with a private pool.",
    price: "705000",
    image: "property-10.jpg",

    operation: "rent",
  },
  {
    id: 12,
    title: "Dubai Marina",
    description: "A modern apartment in the city center.",
    price: "705000",
    image: "property-7.jpg",
    operation: "sale",
  },
];

export default function Properties() {
  const [searchValue, setSearchValue] = useState("");
  const [properties, setProperties] = useState(propertiesData);
  const [operation, setOperation] = useState("rent");
  const filteredPropertiesByOperation = properties.filter(
    (property) => property.operation === operation
  );

  const filteredPropertiesBySearch = filteredPropertiesByOperation.filter(
    (property) => {
      return property.title.toLowerCase().includes(searchValue.toLowerCase());
    }
  );

  const [page, setPage] = useState(1);
  const [maxPropertiesPerPage, setMaxPropertiesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <header className="p-14 flex gap-y-12 md:flex-row gap-x-14 flex-col items-start md:items-center">
        <div className="border border-[#47413C] [&>button]:px-5 [&>button]:py-4">
          <button
            className={`${
              operation === "sale"
                ? "bg-[#47413C] text-white"
                : "bg-transparent text-[#47413C]"
            }`}
            onClick={() => setOperation("sale")}
          >
            Buy
          </button>
          <button
            className={`${
              operation === "rent"
                ? " bg-[#47413C] text-white"
                : "bg-transparent text-[#47413C]"
            }`}
            onClick={() => setOperation("rent")}
          >
            Rent
          </button>
        </div>

        <div className="flex items-center gap-x-4">
          <img
            src="/property-search-icon.svg"
            alt="icon search"
            className="size-8"
          />
          <input
            type="text"
            className="border-0 outline-0 bg-transparent placeholder:text-[#22272F] placeholder:text-xl text-[#22272F] text-xl  w-[100%] lg:w-[400px] "
            placeholder="Search for Location, City or Community"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
      </header>

      <section className="pb-20">
        <div className="grid lg:grid-cols-3 2xl:grid-cols-5 grid-cols-1 md:grid-cols-2 gap-x-8  gap-y-8 border-black max-w-[95%] mx-auto">
          {filteredPropertiesBySearch
            .slice(currentPage, maxPropertiesPerPage)
            .map((property) => (
              <article key={property.id} className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-3">
                  <p className=" text-[#272421] text-[22px]">
                    {property.title}
                  </p>
                  <p className="text-[#47413C] ">
                    <span className="uppercase">For {property.operation} </span>
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
                    src={property.image}
                    alt="property"
                    className="w-full object-cover"
                  />
                </div>

                <footer className="flex justify-between text-[#47413C]">
                  <p>
                    AED <span>{property.price}</span>
                  </p>

                  <a href="/properties" className="uppercase flex gap-x-2">
                    See property
                    <img src="/arrow-up-right.svg" alt="arrrow up" />
                  </a>
                </footer>
              </article>
            ))}
        </div>
      </section>

      <div className="py-16 px-8 flex justify-between">
        <div className="menu">
          <div className="item">
            <a href="#" className="link">
              <span> Page 01 </span>
              <svg viewBox="0 0 360 360" xml:space="preserve">
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
            </a>
            <div className="submenu">
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  {" "}
                  1{" "}
                </a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  {" "}
                  2{" "}
                </a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  {" "}
                  3{" "}
                </a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  4
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-6">
          <button
            onClick={() => {
              if (page > 5) {
                setPage(page - 1);
                setCurrentPage(page * maxPropertiesPerPage);
                setMaxPropertiesPerPage(page * maxPropertiesPerPage - 5);
              }
            }}
          >
            <img src="/caret-left.svg" alt="caret left" />
          </button>

          <div className="flex items-center gap-x-4">
            <div
              className={` py-3 px-4 rounded-full ${
                page === 1
                  ? "text-white bg-[#DFB66A]"
                  : "text-[#667991] bg-transparent"
              }`}
            >
              01
            </div>
            <div
              className={` py-3 px-4 rounded-full ${
                page === 2
                  ? "text-white bg-[#DFB66A]"
                  : "text-[#667991] bg-transparent"
              }`}
            >
              02
            </div>
            <div
              className={` py-3 px-4 rounded-full ${
                page === 3
                  ? "text-white bg-[#DFB66A]"
                  : "text-[#667991] bg-transparent"
              }`}
            >
              03
            </div>
            <div
              className={` py-3 px-4 rounded-full ${
                page === 4
                  ? "text-white bg-[#DFB66A]"
                  : "text-[#667991] bg-transparent"
              }`}
            >
              04
            </div>
            <div
              className={` py-3 px-4 rounded-full ${
                page === 5
                  ? "text-white bg-[#DFB66A]"
                  : "text-[#667991] bg-transparent"
              }`}
            >
              05
            </div>
          </div>

          <button
            onClick={() => {
              if (page < 5) {
                setPage(page + 1);
                setCurrentPage(page * maxPropertiesPerPage);
                setMaxPropertiesPerPage(page * maxPropertiesPerPage + 5);
              }
            }}
          >
            <img src="/caret-right.svg" alt="caret rigth" />
          </button>
        </div>
      </div>
    </div>
  );
}
