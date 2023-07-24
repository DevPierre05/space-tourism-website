import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home_bg min-h-screen max-w-full bg-cover bg-no-repeat px-4 pb-12">
      <div className="mx-auto grid w-[85%] justify-center gap-20 px-2 pt-44 sm:gap-32 md:pt-60 lg:w-full lg:grid-cols-2 lg:pt-72">
        <div className="text-white lg:ml-8 xl:ml-32">
          <h1 className="first_header sm:text-[1.50rem] md:text-[1.75rem] lg:text-[1.75rem] xl:text-4xl">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h1 className="space font-bold uppercase sm:text-[7.2rem] md:text-[9.3rem] xl:text-[11rem]">
            space
          </h1>
          <p className="paragraph-text max-w-[28rem] sm:text-[1.125rem] xl:w-[33rem] xl:text-[1.3rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className="explore flex items-center justify-center justify-self-center rounded-full bg-white uppercase
        sm:h-[17.125rem] sm:w-[17.125rem] "
        >
          <Link to="/destination">Explore</Link>
        </div>
      </div>
    </section>
  );
}
