import { FaBars } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const MainLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-[#0e1729]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden ms-5 mt-5"
        >
          <FaBars />
        </label>
        <div className="">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-neutral-400 text-white">
          {/* Sidebar content here */}
          <li className="hover:text-primary hover:text-lg">
            <ScrollLink to="home" smooth={true} duration={1000}>
              Back to Top
            </ScrollLink>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <ScrollLink to="skills" smooth={true} duration={1000}>
              Skills
            </ScrollLink>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <ScrollLink to="projects" smooth={true} duration={1000}>
              Projects
            </ScrollLink>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <ScrollLink to="about" smooth={true} duration={1000}>
              About Me
            </ScrollLink>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <Link to="/contact">Contact Me</Link>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
