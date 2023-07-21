import data from "../../data.json";
import marsImg from "../../assets/destination/image-mars.png";

export default function Mars() {
  const { destinations } = data;
  const [mars] = destinations.filter((dest) => dest.name === "Mars");
  console.log(mars);
  return (
    <section className="mt-8 px-2 max-w-full flex flex-col items-center gap-[4rem] md:mt-20 lg:mt-8 sm:gap-[6.5rem] lg:gap-[12rem] lg:flex-row">
      <div className="mt-2 flex justify-center lg:basis-[50%]">
        <img
          src={marsImg}
          alt=""
          className="w-[17.375rem] h-[17.375rem] sm:w-[24.375rem] sm:h-[24.375rem] md:w-[28.375rem] md:h-[28.375rem]"
        />
      </div>
      <div className="max-w-full px-4 flex flex-col items-center lg:basis-[50%] text-white">
        <h1 className="name_dest sm:text-[6.25rem]">{mars.name}</h1>
        <p className="dest_description sm:max-w-[90%] md:max-w-[75%]">
          {mars.description}
        </p>
        <hr className="mt-16 w-[75%]" />
        <div className="mt-10 flex gap-14">
          <div className="">
            <p className="sub_text">Avg. distance</p>
            <p className="sub_text_results sm:text-[1.75rem]">
              {mars.distance}
            </p>
          </div>
          <div className="">
            <p className="sub_text">Est. Travel Time</p>
            <p className="sub_text_results">{mars.travel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
