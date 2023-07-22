
import { NavLink, Outlet } from "react-router-dom";

export default function DestinationLayout() {
  const activeLink = {
    borderBottom: "thin solid #fff",
  };
  // const styles_bg = {
  //   backgroundImage: `url(${background})`,
  // };

  return (
    <section className="bg-destination-mobile bg-no-repeat bg-cover mx-auto max-w-full min-h-screen pt-[5.75rem] md:bg-destination-tablet lg:bg-destination-desktop">
      <div className="flex gap-4 px-1 flex-col items-center md:justify-center md:gap-12 lg:flex-row lg:gap-[15rem]">
        <h1 className="destination_header mt-20 text-white text-center basis-[50%] sm:text-[1.75rem] lg:ml-32">
          <span className="header_span sm:text-[1.75rem] pr-2">01</span>Pick your destination
        </h1>
        <nav className="menu_list mt-6 px-2 flex gap-5 text-white basis-[50%] sm:text-[1rem] sm:gap-10 md:mt-4 lg:mt-36">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="uppercase"
          >
            Moon
          </NavLink>
          <NavLink
            to="mars"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="uppercase"
          >
            Mars
          </NavLink>
          <NavLink
            to="europa"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="uppercase"
          >
            Europa
          </NavLink>
          <NavLink
            to="titan"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="uppercase"
          >
            Titan
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </section>
  );
}
