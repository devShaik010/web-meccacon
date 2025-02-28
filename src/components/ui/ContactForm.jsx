import { useForm } from "react-hook-form";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { cn } from "@utils/cn";
import ShowError from "@components/ui/ShowError";
import { Textarea } from "@components/ui/Textarea";
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex items-start justify-center flex-col gap-2 rounded-xl"
    >
      <div className="flex flex-col w-9/12  h-full items-start justify-center lg:gap-6 gap-2 rounded-xl p-2 m-auto">
        {/* heading */}
        <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold capitalize mb-2">
          Lets Have a chat!
        </h4>
        {/* name fields */}
        <div className="flex flex-col w-full lg:flex-row gap-2">
          <div className="flex flex-col w-full">
            <label
              data-error={errors?.firstName ? true : false}
              className={cn(
                "transition-all duration-300 ease-in-out",
                "text-primary/60 text-sm data-[error=true]:text-red-500/80",
                "inline-flex"
              )}
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              className={cn(
                "transition-all duration-300 ease-in-out",
                "data-[error=true]:border-red-400 data-[error=true]:border-2 data-[error=true]:bg-red-200/50"
              )}
              data-error={errors?.firstName ? true : false}
              placeholder="John"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name is required",
                },
              })}
            />
            {errors?.firstName && (
              <ShowError className="text-sm bg-none text-red-500/80 mt-1">
                {errors?.firstName.message}
              </ShowError>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              data-error={errors?.firstName ? true : false}
              className={cn(
                "transition-all duration-300 ease-in-out",
                "text-primary/60 text-sm data-[error=true]:text-red-500/80",
                "inline-flex"
              )}
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              className={cn(
                "transition-all duration-300 ease-in-out",
                "data-[error=true]:border-red-400 data-[error=true]:border-2 data-[error=true]:bg-red-200/50"
              )}
              placeholder="Doe"
              data-error={errors?.lastName ? true : false}
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name is required",
                },
              })}
            />
            {errors?.lastName && (
              <ShowError className="text-sm bg-none text-red-500/80 mt-1">
                {errors?.lastName.message}
              </ShowError>
            )}
          </div>
        </div>
        {/* email field */}
        <div className="flex flex-col w-full">
          <label
            data-error={errors?.email ? true : false}
            className={cn(
              "transition-all duration-300 ease-in-out",
              "text-primary/60 text-sm data-[error=true]:text-red-500/80",
              "inline-flex"
            )}
          >
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            className={cn(
              "transition-all duration-300 ease-in-out",
              "data-[error=true]:border-red-400 data-[error=true]:border-2 data-[error=true]:bg-red-200/50"
            )}
            data-error={errors?.email ? true : false}
            placeholder="example@domain.tldr"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors?.email && (
            <ShowError className="text-sm bg-none text-red-500/80 mt-1">
              {errors?.email.message}
            </ShowError>
          )}
        </div>
        {/* message field */}
        <div className="flex flex-col w-full">
          <label
            data-error={errors?.email ? true : false}
            className={cn(
              "transition-all duration-300 ease-in-out",
              "text-primary/60 text-sm data-[error=true]:text-red-500/80",
              "inline-flex"
            )}
          >
            Messages <span className="text-red-500">*</span>
          </label>
          <Textarea
            className={cn(
              "transition-all duration-300 ease-in-out",
              "data-[error=true]:border-red-400 data-[error=true]:border-2 data-[error=true]:bg-red-200/50"
            )}
            data-error={errors?.email ? true : false}
            placeholder="Hi there..."
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
          />
          {errors?.message && (
            <ShowError className="text-sm bg-none text-red-500/80 mt-1">
              {errors?.message.message}
            </ShowError>
          )}
        </div>

        {/* submit button */}
        <Button
          type="submit"
          className={cn(
            "p-2 px-6 bg-secondary rounded-md",
            "hover:bg-secondary-dark/10",
            "transition-all duration-300 ease-in-out"
          )}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
