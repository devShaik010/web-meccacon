import Hero from "@components/Hero/Hero";
import Carousel from "@components/Carousel/Carousel";
import Circle from "@components/Circle/Circle";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Circle />
      <Carousel />
    </main>
  );
};

export default Home;
