import { useForm } from "react-hook-form";
import { Input } from "@components/ui/Input";
import { Textarea } from "@components/ui/Textarea";
import { Button } from "@components/ui/Button";
import ShowError from "@components/ui/ShowError";
import { cn } from "@utils/cn";

function ContactForm({ className }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, errors);
  };
  // React.useEffect(() => {
  //   console.log(errors);
  // }, [errors]);
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "bg-secondary-light rounded-xl p-4 grid grid-flow-row gap-4 min-h-100 min-w-80",
        className
      )}
    >
      <div className="w-full text-center text-xl text-primary-dark font-semibold">
        Lets Connect with us!
      </div>
      <div className="flex gap-2 flex-col">
        <Input
          className="rounded-xl"
          placeholder="Enter your name"
          {...register("name", {
            required: { value: true, message: "Name is required " },
          })}
        />
        {errors?.name && (
          <ShowError className="rounded-lg text-sm">
            {errors?.name?.message}
          </ShowError>
        )}
      </div>
      <div className="flex gap-2 flex-col">
        <Input
          type="email"
          className="rounded-xl"
          placeholder="Enter your email"
          {...register("email", {
            required: { value: true, message: "email is required " },
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors?.email && (
          <ShowError className="rounded-lg text-sm">
            {errors?.email?.message}
          </ShowError>
        )}
      </div>

      <div className="flex gap-2 flex-col">
        <Textarea
          placeholder="Enter Your Message"
          className="resize-none rounded-xl"
          {...register("message", {
            required: { value: true, message: "message is required " },
            minLength: {
              value: 16,
              message: "Message should be minimum 16 characters long",
            },
          })}
        />
        {errors?.message && (
          <ShowError className="rounded-lg text-sm">
            {errors?.message?.message}
          </ShowError>
        )}
      </div>

      <Button
        type="submit"
        className="bg-primary-dark p-2 rounded-xl px-4 w-fit text-base text-secondary self-center h-fit hover:bg-blue-500 hover:text-primary-dark"
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
