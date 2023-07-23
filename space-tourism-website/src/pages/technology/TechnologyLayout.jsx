import { Outlet, NavLink } from "react-router-dom";

export default function TechnologyLayout() {
  const activeLink = {
    backgroundColor: "#fff",
    color: "#000",
  };

  return (
    <section className="tech_bg mx-auto min-h-screen max-w-full bg-cover bg-no-repeat pt-[5.75rem] pb-12">
      <div className="mt-20 ml-8 text-white md:ml-16 xl:ml-32">
        <h1 className="destination_header sm:text-[1.75rem]">
          <span className="header_span pr-2 sm:text-[1.75rem]">03</span>Space
          Launch 101
        </h1>
        {/* For Mobile and smaller screen Only */}
        <div className="mt-12 flex justify-center gap-6 md:hidden ">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="number flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-2 border-zinc-800 text-[1rem] text-2xl"
          >
            1
          </NavLink>
          <NavLink
            to="spaceport"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="number flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-2 border-zinc-800 text-[1rem] text-2xl"
          >
            2
          </NavLink>
          <NavLink
            to="space-capsule"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="number flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-2 border-zinc-800 text-[1rem] text-2xl"
          >
            3
          </NavLink>
        </div>
        {/* End of mobile menu */}

        <div className="mt-10 flex max-w-full md:mt-36 md:gap-16 lg:gap-8 xl:gap-16">
          <div className="hidden w-[10%] md:flex md:flex-col md:gap-6">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeLink : null)}
              className="number flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-zinc-800 text-2xl"
            >
              1
            </NavLink>
            <NavLink
              to="spaceport"
              style={({ isActive }) => (isActive ? activeLink : null)}
              className="number flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-zinc-800 text-2xl"
            >
              2
            </NavLink>
            <NavLink
              to="space-capsule"
              style={({ isActive }) => (isActive ? activeLink : null)}
              className="number flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-zinc-800 text-2xl"
            >
              3
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
