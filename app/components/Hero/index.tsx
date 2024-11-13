import HeroSearch from "../HeroSearch";
import HeroTitle from "../HeroTitle";
import Nav from "../Nav";
import Phrase from "../Phrase";

export default function Hero() {
  return (
    <div className="h-full top-0 bg-[#272421]/55">
      <Nav />
      <HeroTitle />
      <HeroSearch />
      <Phrase />
    </div>
  );
}
