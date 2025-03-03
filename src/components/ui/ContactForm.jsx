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
      className="w-full flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-xl "
    >
      <div className="w-full max-w-3xl flex flex-col items-start gap-6">
        {/* Heading */}
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
          Let's Have a Chat!
        </h4>

        {/* Name Fields */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col w-full">
            <label
              data-error={errors?.firstName ? true : false}
              className={cn(
                "text-sm font-medium transition-colors",
                "text-gray-700 data-[error=true]:text-red-500"
              )}
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              className={cn(
                "w-full p-2 border rounded-md transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]",
                "data-[error=true]:border-red-400 data-[error=true]:bg-red-50"
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
              <ShowError className="text-sm mt-1 text-red-500">
                {errors?.firstName.message}
              </ShowError>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              data-error={errors?.lastName ? true : false}
              className={cn(
                "text-sm font-medium transition-colors",
                "text-gray-700 data-[error=true]:text-red-500"
              )}
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              className={cn(
                "w-full p-2 border rounded-md transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]",
                "data-[error=true]:border-red-400 data-[error=true]:bg-red-50"
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
              <ShowError className="text-sm mt-1 text-red-500">
                {errors?.lastName.message}
              </ShowError>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col w-full">
          <label
            data-error={errors?.email ? true : false}
            className={cn(
              "text-sm font-medium transition-colors",
              "text-gray-700 data-[error=true]:text-red-500"
            )}
          >
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            className={cn(
              "w-full p-2 border rounded-md transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]",
              "data-[error=true]:border-red-400 data-[error=true]:bg-red-50"
            )}
            data-error={errors?.email ? true : false}
            placeholder="example@domain.com"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors?.email && (
            <ShowError className="text-sm mt-1 text-red-500">
              {errors?.email.message}
            </ShowError>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col w-full">
          <label
            data-error={errors?.message ? true : false}
            className={cn(
              "text-sm font-medium transition-colors",
              "text-gray-700 data-[error=true]:text-red-500"
            )}
          >
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            className={cn(
              "w-full p-2 border rounded-md transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]",
              "data-[error=true]:border-red-400 data-[error=true]:bg-red-50"
            )}
            data-error={errors?.message ? true : false}
            placeholder="Hi there..."
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
          />
          {errors?.message && (
            <ShowError className="text-sm mt-1 text-red-500">
              {errors?.message.message}
            </ShowError>
          )}
        </div>

        {/* Submit Button */}
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
