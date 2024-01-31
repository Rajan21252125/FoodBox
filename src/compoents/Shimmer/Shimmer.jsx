/* eslint-disable react/prop-types */
const Shimmer = ({number,style}) => {
  return (
    <div className={`md:${style} mx-14 grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4`}>
      {Array(number)
        .fill("")
        .map((_, index) => (
          <div key={index} className="mt-8 animate-pulse">
            <div className="h-40 w-56 bg-gray-300 rounded-md"></div>
            <div className="w-52 bg-gray-300 mt-4 h-4 rounded-md"></div>
            <div className="w-44 bg-gray-300 mt-4 h-4 rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
