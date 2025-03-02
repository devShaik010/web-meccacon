import Form from "@components/ui/ContactForm";
import img from "@assets/fc.svg";
import { cn } from "@utils/cn";
import { Accordion } from "../components/ui/Accordian";
const Contact = () => {
  const accordionItems = [
    {
      title: "Explore Knowledge",
      content:
        "Discover new worlds of information with our interactive learning platform.",
    },
    {
      title: "Innovative Learning",
      content:
        "Experience cutting-edge educational techniques that adapt to your unique learning style.",
    },
    {
      title: "Global Community",
      content:
        "Connect with learners worldwide and share insights in our vibrant, diverse community.",
    },
    {
      title: "Personalized Growth",
      content:
        "Track your progress and receive tailored recommendations to accelerate your learning journey.",
    },
  ];
  return (
    <section>
      <div className=" bg-white px-4 py-8 lg:px-12 flex items-center flex-col justify-center md:grid md:grid-cols-2 md:py-12 place-items-center">
        {/* <Form /> */}
        <div className=" w-2/3  flex rounded-xl relative">
          {/* <div
          className={cn(
            "top-0 left-0 w-full h-full absolute rounded-xl opacity-100",
            "bg-radial-[at_25%_25%] from-transparent to-primary/50 to-75%"
          )}
        /> */}
          <img src={img} className="aspect-square w-full rounded-lg " />
        </div>
        <Accordion items={accordionItems} />
      </div>
      <div className=" bg-white px-4 py-8 lg:px-12 flex items-center flex-col justify-center md:grid md:grid-cols-2 md:py-12 place-items-center">
        <Form />
        <div className=" w-2/3 flex rounded-xl relative">
          <div
            className={cn(
              "top-0 left-0 w-full h-full absolute rounded-xl opacity-100",
              "bg-radial-[at_25%_25%] from-transparent to-primary/50 to-75%"
            )}
          />
          <img
            src={img}
            className="aspect-square hidden md:block w-full rounded-lg "
          />
        </div>
        {/* <Accordion items={accordionItems} /> */}
      </div>
    </section>
  );
};

export default Contact;
