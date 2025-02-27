import { cn } from "@utils/cn";

function ShowError({ children, className }) {
  return (
    <div
      className={cn("text-primary text-base rounded-xl capitalize", className)}
    >
      {children}
    </div>
  );
}

export default ShowError;
