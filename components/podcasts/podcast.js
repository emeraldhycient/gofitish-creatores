import { useState, useEffect } from "react";

function Podcast({ podcast, index }) {
  const { title, poster, audio_url, listens, channel_id } = podcast;

  const [isplaying, setisplaying] = useState(false);
  const [audio, setaudio] = useState(null);
  const [duration, setduration] = useState(0);

  useEffect(() => setaudio(new Audio(audio_url)), [audio_url]);

  const playpause = () => {
    if (isplaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setisplaying(!isplaying);
  };

  return (
    <tr className="h-100 items-center text-center rounded odd:bg-gray-800">
      <td className="p-5">
        <h4 className=" font-bold text-base text-gray-50 text-left">
          {index > 9 ? index : `0${index}`}
        </h4>
      </td>
      <td>
        <div className="text-left">
          <button
            onClick={(e) => playpause()}
            className="bg-slate-900 rounded-full ring-1 ring-slate-900 hover:bg-slate-700 text-white px-4 py-1 uppercase text-base font-normal"
          >
            {isplaying ? "Pause" : "Play"}
          </button>
        </div>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-gray-50 text-left">
          {title}
        </h4>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-gray-50 text-left">
          {channel_id}
        </h4>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-gray-50 text-left">
          {(audio?.duration / 60).toFixed(2)}
        </h4>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-gray-50 text-left">
          {listens}
        </h4>
      </td>
    </tr>
  );
}

export default Podcast;
