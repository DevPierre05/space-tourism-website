import { Outlet, NavLink } from "react-router-dom";
// import background from "../../assets/technology/background-technology-desktop.jpg"

export default function TechnologyLayout() {
  const activeLink = {
    backgroundColor: "#fff",
    color: "#000",
  };
  // const styles_bg = {
  //   backgroundImage: `url(${background})`,
    
  // };
 
  return (
    <section className="bg-tech-mobile bg-no-repeat bg-cover mx-auto max-w-full min-h-screen pt-[5.75rem] md:bg-tech-tablet lg:bg-tech-desktop">
      <div className="mt-20 ml-8 text-white md:ml-16 xl:ml-32">
        <h1 className="destination_header sm:text-[1.75rem]">
          <span className="header_span sm:text-[1.75rem] pr-2">03</span>Space
          Launch 101
        </h1>
        {/* For Mobile and smaller screen Only */}
        <div className="mt-12 flex gap-6 justify-center md:hidden ">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="number text-[1rem] flex justify-center items-center text-2xl w-[2.5rem] h-[2.5rem] border-2 border-zinc-800 rounded-full"
          >
            1
          </NavLink>
          <NavLink
            to="spaceport"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="number text-[1rem] flex justify-center items-center text-2xl w-[2.5rem] h-[2.5rem] border-2 border-zinc-800 rounded-full"
          >
            2
          </NavLink>
          <NavLink
            to="space-capsule"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="number text-[1rem] flex justify-center items-center text-2xl w-[2.5rem] h-[2.5rem] border-2 border-zinc-800 rounded-full"
          >
            3
          </NavLink>
        </div>
        {/* End of mobile menu */}
        
        <div className="mt-10 flex md:gap-16 lg:gap-8 xl:gap-16 md:mt-36 max-w-full">
          <div className="hidden md:flex md:flex-col md:gap-6 w-[10%]">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeLink : null)}
              className="number flex justify-center items-center text-2xl w-[5rem] h-[5rem] border-2 border-zinc-800 rounded-full"
            >
              1
            </NavLink>
            <NavLink
              to="spaceport"
              style={({ isActive }) => (isActive ? activeLink : null)}
              className="number flex justify-center items-center text-2xl w-[5rem] h-[5rem] border-2 border-zinc-800 rounded-full"
            >
              2
            </NavLink>
            <NavLink
              to="space-capsule"
              style={({ isActive }) => (isActive ? activeLink : null)}
              className="number flex justify-center items-center text-2xl w-[5rem] h-[5rem] border-2 border-zinc-800 rounded-full"
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
