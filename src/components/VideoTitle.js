import { PLAY_ICON } from "../utils/constants";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] pl-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold text-gray-100">{title}</h1>
      <p className="text-md w-1/3 my-5">{overview}</p>
      <div>
        <img
          alt="play"
          src={PLAY_ICON}
          className="w-4 h-4 absolute ml-5 mt-3"
        />
        <button className="mr-2 bg-white text-black rounded-lg py-2 px-10 font-bold hover:bg-opacity-85 ">
          Play
        </button>

        <button className="ml-3 bg-white text-black rounded-lg py-2 px-10 font-bold hover:bg-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
