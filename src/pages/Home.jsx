import Hero from "@components/Hero/Hero";
import Carousel from "@components/Carousel/Carousel";
import Circle from "@components/Circle/Circle";
import Contact from "./Contact";
import { cn } from "@utils/cn";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Circle />
      <Carousel />
      <Contact />      
    </main>
  );
};

export default Home;
