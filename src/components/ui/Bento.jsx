import { cn } from "@utils/cn";

function Bento() {
  return (
    <section className="w-full h-full flex flex-col py-6 lg:py-12 px-4 lg:px-8 bg-white items-center justify-center">
      <section
        className={cn(
          "w-full h-ful p-4 min-h-[50svh]",
          "flex flex-col md:grid md:grid-cols-7 md:grid-rows-6 gap-4"
        )}
      >
        <div
          className={cn(
            "md:col-span-3 md:row-span-2",
            " rounded-xl bg-primary-dark/10",

            "min-h-72 md:min-h-56",
            "relative flex p-4 py-12",
            `bg-[url('/cc.svg')] bg-no-repeat bg-[size:75%] hover:bg-[size:80%] bg-[position:50%_150%] md:bg-[position:50%_-30%]`,
            "transition-all ease-in-out duration-200"
          )}
        >
          <p
            className={cn(
              " capitalize",

              "text-3xl md:text-2xl lg:text-4xl font-semibold"
            )}
          >
            Operating Since 2020
          </p>
        </div>
        <div
          className={cn(
            "md:col-span-2 md:row-span-4",
            " rounded-xl bg-primary-dark/10",
            "relative flex p-4 py-12",
            "min-h-96 md:min-h-56",
            `bg-[url('/fc.svg')] bg-no-repeat lg:bg-[size:60%] bg-[size:80%] hover:bg-[size:65%] bg-[position:100%_100%]`,
            "transition-all ease-in-out duration-200"
          )}
        >
          <p
            className={cn(
              " capitalize",

              "text-3xl md:text-2xl lg:text-4xl font-semibold"
            )}
          >
            With more than <span className="text-yellow-600">50+</span>{" "}
            Satisfied customers
          </p>
        </div>
        <div
          className={cn(
            "md:col-span-2 md:row-span-4",
            " rounded-xl bg-primary-dark/10",
            "relative flex p-4 py-12",
            "min-h-80 md:min-h-56",
            `bg-[url('/lc.svg')] bg-no-repeat bg-[size:75%] group hover:bg-[size:85%] bg-[position:50%_100%]`,
            "transition-all ease-in-out duration-200"
          )}
        >
          <p
            className={cn(
              " capitalize",
              "w-full",
              "text-3xl md:text-2xl lg:text-4xl font-semibold text-left"
            )}
          >
            Present Across the Country
          </p>
        </div>
        <div
          className={cn(
            "md:col-span-3 md:row-span-4",
            " rounded-xl bg-primary-dark/10",
            "relative flex p-4 py-12 pb-0",
            "lg:min-h-56 min-h-72",
            "flex items-center justify-between flex-col",
            `bg-[url('/ec.svg')] bg-no-repeat bg-[size:100%] hover:bg-[size:105%] bg-bottom`,

            "transition-all ease-in-out duration-200"
          )}
        >
          <p
            className={cn(" capitalize", "text-4xl  font-semibold text-center")}
          >
            Experienced Team
          </p>
        </div>

        <div
          className={cn(
            "md:col-span-4 md:row-span-2",
            " rounded-xl bg-primary-dark/10",
            "relative flex p-4 py-12 pb-0",
            "md:min-h-56 min-h-80",
            `bg-[url('/ctc.svg')] bg-no-repeat bg-[size:90%] lg:bg-[size:45%] hover:bg-[size:50%] bg-right-bottom`,

            "transition-all ease-in-out duration-200"
          )}
        >
          <p
            className={cn(
              " capitalize",
              "text-3xl md:text-2xl lg:text-4xl font-semibold"
            )}
          >
            Turning Visions into reality
          </p>
          <div className={cn("w-[36%] h-full")} />
        </div>
      </section>
    </section>
  );
}

export default Bento;
