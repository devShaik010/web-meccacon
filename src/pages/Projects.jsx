import { Timeline } from "@components/ui/Timeline";
import imgSrc from "@assets/images//mariano-baraldi-a08GO4UMpzw-unsplash.jpg";
export default function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="border border-white/10 p-2 rounded-xl flex flex-col gap-4 lg:flex-row text-white">
          <img
            src={imgSrc}
            className=" aspect-square h-56 rounded-lg object-cover"
            alt=""
          />
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h4>
            <p className="text-white/60">
              Dolore, impedit porro adipisci totam numquam alias nam molestias
              dolorum perspiciatis similique officia quod inventore commodi
              fugit corrupti nemo placeat mollitia distinctio.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="border border-white/10 p-2 rounded-xl flex flex-col gap-4 lg:flex-row text-white">
          <img
            src={imgSrc}
            className=" aspect-square h-56 rounded-lg object-cover"
            alt=""
          />
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h4>
            <p className="text-white/60">
              Dolore, impedit porro adipisci totam numquam alias nam molestias
              dolorum perspiciatis similique officia quod inventore commodi
              fugit corrupti nemo placeat mollitia distinctio.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="border border-white/10 p-2 rounded-xl flex flex-col gap-4 lg:flex-row text-white">
          <img
            src={imgSrc}
            className=" aspect-square h-56 rounded-lg object-cover"
            alt=""
          />
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h4>
            <p className="text-white/60">
              Dolore, impedit porro adipisci totam numquam alias nam molestias
              dolorum perspiciatis similique officia quod inventore commodi
              fugit corrupti nemo placeat mollitia distinctio.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full relative min-h-svh bg-primary-dark">
      <div className="w-full py-12">
        <Timeline data={data} />
      </div>
    </div>
  );
}
