import { NavLink, Link, Outlet } from "react-router-dom";
import logo from "../assets/images/shared/logo.svg";
import { useState } from "react";
export default function Layout() {
  const activeLink = {
    borderBottom: "thin solid #fff",
  };
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)

  const menuClickFunction = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main>
      <nav className="flex justify-between items-center absolute top-0 right-0 w-full -gap-6 pt-6 pl-8 h-24">
        <div className="basis-[30%] flex gap-5 h-24 items-center">
          <Link to="/">
            <img src={logo} alt="" className="w-12" />
          </Link>
          <hr className="lg:absolute lg:left-20 lg:w-[18.5rem] lg:ml-3 lg:h-px lg:bg-white lg:opacity-25 xl:w-[25rem]" />
        </div>
        <div className="flex mx-2 items-center z-10 lg:hidden md:hidden">
          {menuOpen === false ? (
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
              onClick={menuClickFunction}
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="40px"
              height="40px"
              fillRule="nonzero"
              onClick={menuClickFunction}
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                // style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path>
                </g>
              </g>
            </svg>
          )}
        </div>
        <ul
          className="hidden lg:backdrop-opacity-10 lg:backdrop-invert lg:bg-[#ffffff00] lg:px-28 lg:basis-[70%] lg:z-2 lg:h-24 lg:flex lg:gap-2 lg:items-center lg:justify-evenly lg:text-white 
        md:backdrop-opacity-10 md:backdrop-invert md:bg-[#ffffff00] md:px-28 md:basis-[70%] md:z-2 md:h-24 md:flex md:gap-6 md:items-center md:justify-around md:text-white "
        >
          <NavLink
            to="."
            className="h-full "
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="flex items-center h-full navlink uppercase  hover:scale-110">
              <span className="font-bold mr-2 md:hidden">00</span> Home
            </li>
          </NavLink>
          <NavLink
            to="/destination"
            className="h-full"
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="navlink flex items-center h-full uppercase  hover:scale-110">
              <span className="font-bold mr-2 md:hidden">01</span> Destination
            </li>
          </NavLink>
          <NavLink
            to="crew"
            className="h-full"
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="navlink flex items-center h-full uppercase hover:scale-110">
              <span className="font-bold mr-2 md:hidden">02</span> Crew
            </li>
          </NavLink>
          <NavLink
            to="technology"
            className="h-full"
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="navlink flex items-center h-full uppercase hover:scale-110">
              <span className="font-bold mr-2 md:hidden">03</span> Technology
            </li>
          </NavLink>
        </ul>
      </nav>
      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={menuClickFunction}
          className="bg-[#3c3d3db9] absolute top-0 w-full h-full md:hidden lg:hidden"
        ></div>
      )}

      {/* Hamburger Display */}
      {menuOpen && (
        <div
          data-aos="slide-left"
          className="backdrop-opacity-30 backdrop-invert bg-[#1d2d46b9] flex space-y-20 
      items-center justify-center pt-4 flex-col absolute top-20 right-0 w-[60%] h-[90%] z-20 lg:hidden md:hidden"
        >
          <NavLink
            to="."
            className=""
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="flex items-center navlink navlink_mobile uppercase hover:scale-110 sm:text-[1.3rem]">
              <span className="font-bold mr-2">00</span> Home
            </li>
          </NavLink>
          <NavLink
            to="/destination"
            className=""
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="navlink navlink_mobile flex items-center uppercase hover:scale-110 sm:text-[1.3rem]">
              <span className="font-bold mr-2">01</span> Destination
            </li>
          </NavLink>
          <NavLink
            to="crew"
            className=""
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="navlink navlink_mobile flex items-center uppercase hover:scale-110 sm:text-[1.3rem]">
              <span className="font-bold mr-2">02</span> Crew
            </li>
          </NavLink>
          <NavLink
            to="technology"
            className=""
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            <li className="navlink navlink_mobile flex items-center uppercase hover:scale-110 sm:text-[1.3rem]">
              <span className="font-bold mr-2">03</span> Technology
            </li>
          </NavLink>
        </div>
      )}
      <Outlet />
      <footer className="bg-slate-900 w-full text-sm text-center text-white">
        Challenge by{" "}
        <span className="underline">
          <Link
            target="_blank"
            to="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
          >
            FrontendMentor
          </Link>
        </span>
        . Coded by Peter Osei
      </footer>
    </main>
  );
}
