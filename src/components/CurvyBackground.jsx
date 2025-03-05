const CurvyBackground = () => {
  return (
    <div className="relative w-full h-[300px] bg-lime-300 text-white font-bold text-6xl flex justify-center items-center p-6">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 Q100,0 200,100 T400,100 T500,100 L500,500 L0,500 Z"
          fill="white"
        />
      </svg>
      <h1 className="relative z-10 text-lime-900">Apex</h1>
    </div>
  );
};

export default CurvyBackground;
