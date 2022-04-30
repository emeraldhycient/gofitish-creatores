import React from "react";

function Video({ video }) {
  const { title, poster, video_url, views, channel_id } = video;
  return (
    <div className="pb-4">
      <video
        src={video_url}
        poster={poster}
        controls
        className="w-full h-44 rounded-2xl"
      ></video>
      <div className=" ml-5">
        <h4 className="text-white font-extrabold text-sm mb-2">{title}</h4>
        <h5 className="text-gray-50 font-light text-xs mb-1">{channel_id}</h5>
        <h5 className="text-gray-50 font-light text-xs">{views} Views 1day</h5>
      </div>
    </div>
  );
}

export default Video;
