import { useEffect, useState } from "react";
import myPhoto from "../../assets/Ashraf-portfolio.png";
import Skills from "../../components/home/Skills";
import Projects from "../../components/home/Projects";
import GenericButton from "../../components/GenericButton";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const Home = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <section>
        <div className="flex my-5" id="home">
          <div className="md:w-1/2 flex flex-col-reverse md:flex-row md:gap-16">
            <div className="flex md:flex-col gap-8 justify-center md:ms-12">
              <a href="https://web.facebook.com/profile.php?id=100009000148768">
                <FaFacebook className="text-blue-400 w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/md-ashraful-islam-6b7293244/">
                <FaLinkedin className="text-blue-400 w-5 h-5" />
              </a>
              <a href="https://github.com/Mamun-Ashraf">
                <FaGithub className="text-blue-400 w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-col gap-8 justify-center ms-5 md:ms-0">
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e4a9fe] to-[#c2abff]">
                Hello there,
              </h2>
              <div>
                <h2 className="text-[#dcceed] text-3xl font-bold">I am</h2>
                <h2 className="text-[#dcceed] text-3xl font-bold my-3">
                  Md. Ashraful Islam
                </h2>
                <h3 className="text-2xl text-[#c277bd]">
                  Front-end Developer | React Developer
                </h3>
              </div>
              <div className="text-gray-400  font-bold mb-5 md:mb-0">
                <h2>Motivated and Enthusiastic Web Developer.</h2>
                <h2>Seeking Opportunities to Grow and Learn.</h2>
              </div>
              <Link to="/contact" className="hidden md:block">
                <GenericButton>
                  <div className="flex gap-6 items-center">
                    <p>Say Hello</p>
                    <FaLocationArrow className="text-blue-400 w-5 h-5" />
                  </div>
                </GenericButton>
              </Link>
            </div>
          </div>
          <div className="w-1/2 hidden md:block">
            <img
              src={myPhoto}
              alt="myPicture"
              className="w-full bg-transparent h-screen"
            />
          </div>
        </div>
        <Link to="/contact" className="md:hidden text-center">
          <GenericButton>
            <div className="flex gap-6 items-center">
              <p>Say Hello</p>
              <FaLocationArrow className="text-blue-400 w-5 h-5" />
            </div>
          </GenericButton>
        </Link>
      </section>
      <section className="my-20 mx-5" id="skills">
        <h2 className="text-white font-medium text-2xl md:text-3xl mb-5">
          Skills
        </h2>
        <h1 className="md:w-2/3 text-[#e4a9fe] font-medium text-xl md:text-3xl mb-16">
          <span className="text-[#c2abff]">
            I offer professional <span className="text-gray-300">MERN</span>{" "}
            development services.{" "}
          </span>
          With expertise in building robust web applications
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {skills.map((skill, index) => (
            <Skills key={index} skill={skill}></Skills>
          ))}
        </div>
      </section>
      <section className="my-20 mx-5" id="projects">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Projects
        </h2>
        <h1 className="text-xl md:text-3xl font-semibold text-[#e4a9fe] md:w-2/3 mb-12">
          I have successfully completed various{" "}
          <span className="text-[#c37]">projects</span>, including developing an{" "}
          <span className="text-[#c37]">e-commerce </span>
          platform
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {projects.map((project, index) => (
            <Projects key={index} project={project}></Projects>
          ))}
        </div>
      </section>
      <section className="my-20 mx-5" id="about">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          About Me
        </h2>
        <h1 className="text-xl font-semibold text-[#e4a9fe] md:w-2/3 mb-12">
          Highly motivated and detail-oriented Front-End Web Developer with a
          strong foundation in Mathematics and comprehensive skills in HTML,
          CSS, JavaScript, Tailwind, React, and Redux. Proficient in Node,
          Express, and MongoDB for full-stack development. Seeking a challenging
          position where I can leverage my skills and passion for web
          development to contribute to innovative projects and grow
          professionally.
        </h1>
      </section>
    </div>
  );
};

export default Home;
