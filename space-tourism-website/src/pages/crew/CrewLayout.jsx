import { Outlet, NavLink } from "react-router-dom";

export default function CrewLayout() {
  const activeLink = {
    backgroundColor: "#fff",
    borderRadius: "100%",
  };

  return (
    <section className="crew_bg mx-auto min-h-screen max-w-full bg-cover bg-no-repeat px-2 pt-[6.75rem] pb-12">
      <div className="mx-auto mt-20 max-w-full lg:max-w-[85%]">
        <h1 className="destination_header text-center text-white sm:text-[1.75rem] lg:ml-32 lg:text-left">
          <span className="header_span mr-2 sm:text-[1.75rem]">01</span>Meet
          your crew
        </h1>
        <Outlet />
        <div className="lg:justify-normal mt-16 flex justify-center gap-5 pb-4 lg:pb-0">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:h-[0.9375rem] sm:w-[0.9375rem]"></div>
          </NavLink>
          <NavLink
            to="mark"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:h-[0.9375rem] sm:w-[0.9375rem]"></div>
          </NavLink>
          <NavLink
            to="victor"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:h-[0.9375rem] sm:w-[0.9375rem]"></div>
          </NavLink>
          <NavLink
            to="anousheh"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className=""
          >
            <div className="crew_links sm:h-[0.9375rem] sm:w-[0.9375rem]"></div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
