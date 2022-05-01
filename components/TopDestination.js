import Heading from "./Heading";

export default function TopDestination() {
  return (
    <section className="ex-t-d py-5 md:py-10">
      <Heading title="Explore Top Destinations" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative z-10 cursor-pointer">
          <div className="absolute text-white bottom-0 z-20 p-5">
            <h1 className="text-sm sm:text-xl">Santorini, Greece</h1>
          </div>
          <div className="sa-img z-10 rounded-lg overflow-hidden">
            <img src="/img/img_1.png" alt="img" />
          </div>
        </div>
        <div className="relative z-10 cursor-pointer">
          <div className="absolute text-white bottom-0 z-20 p-5">
            <h1 className="text-sm sm:text-xl">Santorini, Greece</h1>
          </div>
          <div className="sa-img z-10 rounded-lg overflow-hidden">
            <img src="/img/img_2.png" alt="img" className="" />
          </div>
        </div>
        <div className="relative z-10 cursor-pointer">
          <div className="absolute text-white bottom-0 z-20 p-5">
            <h1 className="text-sm sm:text-xl">Santorini, Greece</h1>
          </div>
          <div className="sa-img z-10 rounded-lg overflow-hidden">
            <img src="/img/img_3.png" alt="img" />
          </div>
        </div>
        <div className="relative z-10 cursor-pointer">
          <div className="absolute text-white bottom-0 z-20 p-5">
            <h1 className="text-sm sm:text-xl">Santorini, Greece</h1>
          </div>
          <div className="sa-img z-10 rounded-lg overflow-hidden">
            <img src="/img/img_4.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
