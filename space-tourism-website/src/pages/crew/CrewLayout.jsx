import { Outlet, NavLink } from "react-router-dom";
// import background from "../../assets/crew/background-crew-desktop.jpg";

export default function CrewLayout() {
  const activeLink = {
    backgroundColor: "#fff",
    borderRadius: "100%"
  };

  // const styles_bg = {
  //   backgroundImage: `url(${background})`,
  // };

  return (
    <section className="bg-crew-mobile px-2 mx-auto bg-no-repeat bg-cover max-w-full min-h-screen pt-[6.75rem] md:bg-crew-tablet lg:bg-crew-desktop">
      <div className="mt-20 max-w-full mx-auto lg:max-w-[85%]">
        <h1 className="destination_header text-white text-center sm:text-[1.75rem] lg:ml-32 lg:text-left">
          <span className="header_span sm:text-[1.75rem] mr-2">01</span>Meet your
          crew
        </h1>
        <Outlet />
        <div className="mt-16 pb-4 flex gap-5 justify-center lg:justify-normal lg:pb-0">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:w-[0.9375rem] sm:h-[0.9375rem]"></div>
          </NavLink>
          <NavLink
            to="mark"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:w-[0.9375rem] sm:h-[0.9375rem]"></div>
          </NavLink>
          <NavLink
            to="victor"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:w-[0.9375rem] sm:h-[0.9375rem]"></div>
          </NavLink>
          <NavLink
            to="anousheh"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:w-[0.9375rem] sm:h-[0.9375rem]"></div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
