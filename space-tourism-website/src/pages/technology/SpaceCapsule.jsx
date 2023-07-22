import data from "../../data.json";
import capsuleImg from "../../images/technology/image-space-capsule-portrait.jpg";
import capsuleImg2 from "../../images/technology/image-space-capsule-landscape.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SpaceCapsule() {
  const { technology } = data;
  const [capsule] = technology.filter((tech) => tech.name === "Space capsule");

  return (
    <section className="max-w-full px-2">
      <div className="flex gap-6 flex-col items-center lg:justify-normal lg:flex-row md:gap-12 xl:gap-16">
        <div className="">
          <h1 className="term uppercase text-center md:text-left ">
            The terminology
          </h1>
          <h1 className="technology_title uppercase mt-2 text-center md:text-left lg:text-[3rem] xl:text-[3.5rem]">
            {capsule.name}
          </h1>
          <p className="tech_description text-center md:text-left md:max-w-[27.75rem] mt-2">
            {capsule.description}
          </p>
        </div>
        <div className="hidden lg:block">
          <LazyLoadImage
            src={capsuleImg}
            alt=""
            className="pb-4 md:w-[28rem] lg:w-[22rem] xl:w-[28rem] md:h-[28rem] lg:absolute lg:top-[15rem] lg:right-0 tech_img"
          />
        </div>
        <div className="lg:hidden">
          <LazyLoadImage
            src={capsuleImg2}
            alt=""
            className="pb-4 w-[28rem] tech_img"
          />
        </div>
      </div>
    </section>
  );
}
