import data from "../../data.json";
import capsuleImg from "../../assets/tech/img-space-capsule-portrait.jpg";
import capsuleImg2 from "../../assets/tech/img-space-capsule-landscape.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SpaceCapsule() {
  const { technology } = data;
  const [capsule] = technology.filter((tech) => tech.name === "Space capsule");

  return (
    <section className="max-w-full px-2">
      <div className="lg:justify-normal flex flex-col items-center gap-6 md:gap-12 lg:flex-row xl:gap-16">
        <div className="">
          <h1 className="term text-center uppercase md:text-left ">
            The terminology
          </h1>
          <h1 className="technology_title mt-2 text-center uppercase md:text-left lg:text-[3rem] xl:text-[3.5rem]">
            {capsule.name}
          </h1>
          <p className="tech_description mt-2 text-center md:max-w-[27.75rem] md:text-left">
            {capsule.description}
          </p>
        </div>
        <div className="hidden lg:block">
          <LazyLoadImage
            src={capsuleImg}
            alt="Image of capsule"
            className="tech_img pb-4 md:h-[28rem] md:w-[28rem] lg:absolute lg:top-[15rem] lg:right-0 lg:w-[22rem] xl:w-[28rem]"
          />
        </div>
        <div className="lg:hidden">
          <LazyLoadImage
            src={capsuleImg2}
            alt="Image of capsule"
            className="tech_img w-[28rem] pb-4"
          />
        </div>
      </div>
    </section>
  );
}
