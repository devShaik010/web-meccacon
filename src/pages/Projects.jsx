import { Timeline } from "@components/ui/Timeline";
import ContetCard from "@components/ui/ProjectCard";
export default function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <ContetCard
          heading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          text={
            " Dolore, impedit porro adipisci totam numquam alias nam molestias\ndolorum perspiciatis similique officia quod inventore commodi\n   fugit corrupti nemo placeat mollitia distinctio"
          }
        />
      ),
    },
    {
      title: "2024",
      content: (
        <ContetCard
          heading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          text={
            " Dolore, impedit porro adipisci totam numquam alias nam molestias\ndolorum perspiciatis similique officia quod inventore commodi\n   fugit corrupti nemo placeat mollitia distinctio"
          }
        />
      ),
    },
    {
      title: "2023",
      content: (
        <ContetCard
          heading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          text={
            " Dolore, impedit porro adipisci totam numquam alias nam molestias\ndolorum perspiciatis similique officia quod inventore commodi\n   fugit corrupti nemo placeat mollitia distinctio"
          }
        />
      ),
    },
  ];
  return (
    <div className="w-full relative min-h-screen bg-white">
      <div className="w-full pt-20 pb-12"> {/* Added top padding for navbar */}
        <Timeline data={data} />
      </div>
    </div>
  );
}
