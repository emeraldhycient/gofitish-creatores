import { useState, useEffect } from "react";

function Trendingpodcast({ trend }) {
  const [isplaying, setisplaying] = useState(false);
  const [audio, setaudio] = useState(null);

  useEffect(() => setaudio(new Audio(trend.audio_url)), [trend]);

  const playpause = () => {
    if (isplaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setisplaying(!isplaying);
  };

  return (
    <div
      className="bg-white h-44 rounded-lg"
      style={{
        backgroundImage: `url(${trend.poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backfaceVisibility: "visible",
        backgroundPosition: "center top",
      }}
    >
      <div
        className="w-full h-full  rounded-lg flex flex-col justify-center px-3"
        style={{
          background:
            "linear-gradient(to right,rgb(200,200,200) 30%,rgba(120,120,120,.4) 70% ",
        }}
      >
        <h1 className="text-xl font-bold w-44 my-4">{trend.title}</h1>
        <div className="flex">
          <button
            onClick={(e) => playpause()}
            className="bg-slate-900 rounded-full ring-1 ring-slate-900 hover:bg-slate-700 text-white px-4 py-1 uppercase text-base font-normal"
          >
            {isplaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trendingpodcast;
