import img from "@assets/images//mariano-baraldi-a08GO4UMpzw-unsplash.jpg";
export default function ContetCard({ heading, text, imgSrc = img }) {
  return (
    <div className="bg-white border border-gray-100 shadow-lg hover:shadow-xl 
      transition-all duration-300 p-4 rounded-xl flex flex-col gap-4 lg:flex-row">
      <img
        src={imgSrc}
        className="aspect-square h-48 md:h-56 rounded-lg object-cover"
        alt=""
      />
      <div className="flex flex-col gap-4 p-4">
        <h4 className="text-gray-900 font-semibold text-lg md:text-xl">
          {heading}
        </h4>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          {text}
        </p>
        <button className="mt-2 self-start px-4 py-2 bg-amber-400 text-white 
          rounded-lg hover:bg-amber-500 transition-colors duration-300 text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
