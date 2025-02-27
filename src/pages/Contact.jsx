import Form from "@components/ui/ContactForm";
import img from "@assets/images/pexels-500photos-com-15338-93400.jpg";
import { cn } from "@utils/cn";
const Contact = () => {
  return (
    <div className="border bg-white px-4 py-8 lg:px-12 grid sm:grid-cols-2 md:py-12 place-items-center border-red-500">
      <Form />
      <div className=" w-full h-full hidden sm:flex rounded-xl relative">
        <div
          className={cn(
            "top-0 left-0 w-full h-full absolute rounded-xl opacity-100",
            "bg-radial-[at_25%_25%] from-transparent to-primary/50 to-75%"
          )}
        />
        <img
          src={img}
          className="h-full max-h-[75svh] w-full object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default Contact;
