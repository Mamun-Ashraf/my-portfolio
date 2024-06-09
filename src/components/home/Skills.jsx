const Skills = ({ skill }) => {
  const { tool, picture, percentage } = skill;
  return (
    <div className="bg-gradient-to-r from-[#e4a9fe] to-[#c2abff] rounded-xl py-1 px-5">
      <div className=" flex items-center justify-evenly">
        <img src={picture} alt="" className="w-1/4" />
        <h2 className="text-center text-xl text-orange-600 font-bold">
          {tool}
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <progress
          className="progress w-56"
          value={percentage}
          max="100"
        ></progress>
        <h3>{percentage}%</h3>
      </div>
    </div>
  );
};

export default Skills;
