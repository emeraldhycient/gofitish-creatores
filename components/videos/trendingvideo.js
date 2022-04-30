import { useState, useEffect } from "react";

function Trendingvideo({ trend }) {
  const { title, poster, video_url, views, channel_id } = trend;

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
      <div className="pb-4">
        <video
          src={video_url}
          poster={poster}
          controls
          className="w-full h-44 rounded-lg"
        ></video>
        <div className=" ml-5 flex items-center">
          <div className="bg-gray-100 h-8 w-8 rounded-full ring-2 ring-purple-600 flex justify-center items-center">
            <img
              src="/images/img3.jpeg"
              alt="profile picture"
              className="rounded-full w-7 h-7"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="ml-2">
              <h4 className="text-white font-extrabold text-sm">{title}</h4>
              <h5 className="text-gray-50 font-semibold text-xs mb-1">
                {channel_id}
              </h5>
            </div>
            <h5 className="text-gray-50 font-light text-xs">
              {views} Views 1day
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trendingvideo;
