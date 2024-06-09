const GenericButton = ({ children }) => {
  return (
    <div>
      <button className="btn bg-gradient-to-r from-primary to-secondary text-white px-10 border-0 hover:text-gray-600">
        {children}
      </button>
    </div>
  );
};

export default GenericButton;
