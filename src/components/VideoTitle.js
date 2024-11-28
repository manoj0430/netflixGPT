const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 pl-20">
      <h1 className="text-3xl font-bold text-gray-600">{title}</h1>
      <p className="text-md w-1/3 my-5">{overview}</p>
      <div>
        <button className="mr-2 bg-gray-600 text-yellow-50 rounded-lg py-2 px-10 font-bold bg-opacity-70">
          ▶️Play
        </button>
        <button className="ml-3  bg-gray-600 text-yellow-50 rounded-lg py-2 px-10 font-bold bg-opacity-70">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
