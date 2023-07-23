import { NavLink, Outlet } from "react-router-dom";

export default function DestinationLayout() {
  const activeLink = {
    borderBottom: "thin solid #fff",
  };

  return (
    <section className="destination_bg mx-auto min-h-screen max-w-full bg-cover bg-no-repeat pt-[5.75rem] pb-12">
      <div className="flex flex-col items-center gap-4 px-1 md:justify-center md:gap-12 lg:flex-row lg:gap-[15rem]">
        <h1 className="destination_header mt-20 basis-[50%] text-center text-white sm:text-[1.75rem] lg:ml-32">
          <span className="header_span pr-2 sm:text-[1.75rem]">01</span>Pick
          your destination
        </h1>
        <nav className="menu_list mt-6 flex basis-[50%] gap-5 px-2 text-white sm:gap-10 sm:text-[1rem] md:mt-4 lg:mt-36">
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
