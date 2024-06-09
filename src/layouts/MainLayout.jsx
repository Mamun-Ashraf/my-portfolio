import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-[#0e1729]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
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
            <a href="home">Home</a>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <a href="skills">Skills</a>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <a href="projects">Projects</a>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <a href="about">About Me</a>
          </li>
          <li className="hover:text-primary hover:text-lg">
            <a href="contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
