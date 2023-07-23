import data from "../../data.json";
import titanImg from "../../assets/images/destination/image-titan.png";
import placeholderImg from "../../assets/images/destination/image-titan.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Titan() {
  const { destinations } = data;
  const [titan] = destinations.filter((dest) => dest.name === "Titan");
  console.log(titan);
  return (
    <section className="mt-8 flex max-w-full flex-col items-center gap-[4rem] px-2 sm:gap-[6.5rem] md:mt-20 lg:mt-8 lg:flex-row lg:gap-[12rem]">
      <div className="mt-2 flex justify-center lg:basis-[50%]">
        <LazyLoadImage
          src={titanImg}
          placeholderSrc={placeholderImg}
          alt="Image of Titan"
          className="h-[17.375rem] w-[17.375rem] sm:h-[24.375rem] sm:w-[24.375rem] md:h-[28.375rem] md:w-[28.375rem]"
        />
      </div>
      <div className="flex max-w-full flex-col items-center px-4 text-white lg:basis-[50%] lg:items-start">
        <h1 className="name_dest sm:text-[6.25rem]">{titan.name}</h1>
        <p className="dest_description sm:max-w-[90%] md:max-w-[75%]">
          {titan.description}
        </p>
        <hr className="mt-16 w-[75%]" />
        <div className="mt-10 flex gap-14">
          <div className="">
            <p className="sub_text">Avg. distance</p>
            <p className="sub_text_results sm:text-[1.75rem]">
              {titan.distance}
            </p>
          </div>
          <div className="">
            <p className="sub_text">Est. Travel Time</p>
            <p className="sub_text_results sm:text-[1.75rem]">{titan.travel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
