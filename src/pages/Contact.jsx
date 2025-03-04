import fcImg from "@assets/fc.svg";
import acImg from "@assets/ac.svg";
import mcImg from "@assets/mc.svg";
import Form from "@components/ui/ContactForm";
import { Accordion } from "@components/ui/Accordian";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
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
        <div className=" w-1/2  flex rounded-xl relative">
          <img src={fcImg} className="aspect-square w-full rounded-lg " />
        </div>
        <Accordion items={accordionItems} />
      </div>
      <div className=" bg-white px-4 py-8 lg:px-12 flex items-center flex-col-reverse md:flex-col justify-center md:grid md:grid-cols-2 md:py-12 place-items-center">
        {/* <Accordion items={accordionItems} /> */}
        <div className="w-full h-full grid place-items-center">
          <div className="w-fit flex flex-col">
            <h3 className="m-auto w-fit capitalize mb-2">Office Location</h3>
            <div className="flex w-fit m-auto p-2 items-start justify-center gap-3">
              <MapPin className="mt-2" size={20} strokeWidth={1} />
              <div className="flex w-fit flex-col">
                <p>Meccacon Private Limited</p>
                <p>AB HQ, XYZ place</p>
                <p>500001 Hyderabad</p>
                <p>Telengana, India</p>
              </div>
            </div>
            <div className="flex w-full m-auto p-2 gap-3 place-self-start">
              <div className="flex gap-2 items-center justify-center">
                <Phone size={18} strokeWidth={1} />
                <p>+91 0123456789</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/2  flex rounded-xl relative">
          <img src={acImg} className="aspect-square w-full rounded-lg " />
        </div>
      </div>

      <div className=" bg-white px-4 py-8 lg:px-12 flex items-center flex-col justify-center md:grid md:grid-cols-2 md:py-12 place-items-center">
        <div className=" w-1/2  flex rounded-xl relative">
          <img src={mcImg} className="aspect-square w-full rounded-lg " />
        </div>
        <Form title="...Or leave a message" />
      </div>
    </section>
  );
};

export default Contact;
