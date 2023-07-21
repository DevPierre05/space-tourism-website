import data from "../../data.json";
import spaceportImg from "../../assets/technology/image-spaceport-portrait.jpg";

export default function Spaceport() {
  const { technology } = data;
  const [spaceport] = technology.filter((tech) => tech.name === "Spaceport");

  return (
    <section className="max-w-full px-2">
      <div className="flex gap-6 flex-col items-center lg:justify-normal lg:flex-row md:gap-12 xl:gap-16">
        <div className="">
          <h1 className="term uppercase text-center md:text-left ">
            The terminology
          </h1>
          <h1 className="technology_title uppercase mt-2 text-center md:text-left lg:text-[3rem] xl:text-[3.5rem]">
            {spaceport.name}
          </h1>
          <p className="tech_description text-center md:text-left md:max-w-[27.75rem] mt-2">
            {spaceport.description}
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={spaceportImg}
            alt=""
            className="pb-4 md:w-[28rem] lg:w-[22rem] xl:w-[28rem] md:h-[28rem] lg:absolute lg:top-[15rem] lg:right-0 tech_img"
          />
        </div>
      </div>
    </section>
  );
}
