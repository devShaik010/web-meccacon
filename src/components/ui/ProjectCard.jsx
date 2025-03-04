import img from "@assets/images//mariano-baraldi-a08GO4UMpzw-unsplash.jpg";
export default function ContetCard({ heading, text, imgSrc = img }) {
  return (
    <div className="border border-white/10 p-2 rounded-xl flex flex-col gap-4 lg:flex-row text-white">
      <img
        src={imgSrc}
        className=" aspect-square h-56 rounded-lg object-cover"
        alt=""
      />
      <div className="flex flex-col gap-4 p-4">
        <h4 className="text-white">{heading}</h4>
        <p className="text-white/60 text-sm lg:text-base">{text}</p>
      </div>
    </div>
  );
}
