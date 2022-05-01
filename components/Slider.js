export default function Slider() {
  return (
    <div className="relative z-10">
      <div className="px-5 bottom-3 sm:bottom-10 lg:bottom-24 lg:w-4/12 absolute text-white">
        <h1 className="text-sm lg:text-3xl">Get Ready For Your</h1>
        <h4 className="text-xl sm:text-3xl lg:text-5xl font-semibold sm:mt-1">
          Next Trip
        </h4>
      </div>
      <div className="sa-img w-full relative -z-10">
        <img src="/img_1.png" className="w-full" />
      </div>
    </div>
  );
}
