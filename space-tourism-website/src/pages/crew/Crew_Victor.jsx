import data from "../../data.json";
import workerImg from "../../images/crew/image-victor-glover.png";
export default function Crew_Victor() {
  const { crew } = data;
  console.log(crew);
  const [worker] = crew.filter((dest) => dest.name === "Victor Glover");
  console.log(worker);

  return (
    <section className="max-w-full mx-auto mt-16 px-2 flex gap-6 flex-col items-center sm:gap-8 lg:gap-4 lg:mt-28 lg:flex-row lg:items-start">
      <div className="lg:basis-[55%] flex flex-col items-center lg:items-start">
        <h1 className="worker_role sm:text-[2rem]">{worker.role}</h1>
        <h1 className="worker_name sm:text-[3rem] md:text-[3.5rem] lg:text-[3.5rem] mt-2">
          {worker.name}
        </h1>
        <p className="mt-4 worker_description w-full md:w-[80%] lg:w-[75%]">
          {worker.bio}
        </p>
      </div>
      <div className="relative lg:basis-[45%]">
        <img
          src={workerImg}
          alt=""
          className="worker_img sm:w-[30.5rem] sm:h-[34.5rem] lg:absolute lg:-top-40"
        />
      </div>
    </section>
  );
}
