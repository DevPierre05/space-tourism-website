// import background from "../assets/home/background-home-desktop.jpg";
// import backgroundTablet from "../assets/home/background-home-tablet.jpg";
// import backgroundMobile from "../assets/home/background-home-mobile.jpg";
import { Link } from "react-router-dom";
export default function Home () {
  // const styles_bg = {
  //   backgroundImage: `url(${background})`,
  // };
  return (
    <main
      // style={styles_bg}
      className="bg-home-mobile bg-no-repeat bg-cover max-w-full min-h-screen px-4 md:bg-home-tablet lg:bg-home-desktop"
    >
      <div className="w-[85%] mx-auto pt-44 px-2 grid gap-20 justify-center sm:gap-32 md:pt-60 lg:w-full lg:pt-72 lg:grid-cols-2">
        <div className="text-white lg:ml-8 xl:ml-32">
          <h1 className="first_header sm:text-[1.50rem] md:text-[1.75rem] lg:text-[1.75rem] xl:text-4xl">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h1 className="space font-bold uppercase sm:text-[7.2rem] md:text-[9.3rem] xl:text-[11rem]">
            space
          </h1>
          <p className="paragraph-text max-w-[28rem] sm:text-[1.125rem] xl:text-[1.3rem] xl:w-[33rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className="justify-self-center explore flex items-center justify-center uppercase rounded-full bg-white
        sm:w-[17.125rem] sm:h-[17.125rem] "
        >
          <Link to="/destination" className="">Explore</Link>
        </div>
      </div>
    </main>
  );
}