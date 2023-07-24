import data from "../../data.json";
import workerImg from "../../assets/crew/img-douglas.png";
import placeholderImg from "../../assets/crew/img-douglas.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Crew_Douglas() {
  const { crew } = data;
  const [worker] = crew.filter((dest) => dest.name === "Douglas Hurley");

  return (
    <section className="mx-auto mt-16 flex max-w-full flex-col items-center gap-6 px-2 sm:gap-8 lg:mt-28 lg:flex-row lg:items-start lg:gap-4">
      <div className="flex flex-col items-center lg:basis-[55%] lg:items-start">
        <h1 className="worker_role sm:text-[2rem]">{worker.role}</h1>
        <h1 className="worker_name mt-2 sm:text-[3rem] md:text-[3.5rem] lg:text-[3.5rem]">
          {worker.name}
        </h1>
        <p className="worker_description mt-4 w-full md:w-[80%] lg:w-[75%]">
          {worker.bio}
        </p>
      </div>
      <div className="relative lg:basis-[45%]">
        <LazyLoadImage
          src={workerImg}
          placeholderSrc={placeholderImg}
          alt="Image of Douglas"
          className="worker_img sm:h-[34.5rem] sm:w-[30.5rem] lg:absolute lg:-top-40"
        />
      </div>
    </section>
  );
}
