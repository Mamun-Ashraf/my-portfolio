const Projects = ({ project }) => {
  const { projectName, picture, projectUrl } = project;
  return (
    <div className="bg-transparent border border-purple-300 rounded-xl py-5">
      <img src={picture} alt="" className="w-3/4 mx-auto" />
      <div className="flex gap-5 justify-center text-white">
        <a href={projectUrl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </a>
        <h2 className="text-center text-xl font-bold">{projectName}</h2>
      </div>
    </div>
  );
};

export default Projects;
