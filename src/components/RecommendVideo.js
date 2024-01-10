import React from "react";
import { MdVerified } from "react-icons/md";

const RecommendVideo = ({ thumbnail, name, channel, views, uploadTime }) => {
  return (
    <div className="text-white md:flex cursor-pointer">
      <div className="grid md:grid-cols-2">
        <div>
          <img src={thumbnail} alt="thumbnail" className="object-contain w-full"/>
        </div>
        <div className="pl-2 mb-3">
          <h2 className="text-sm font-medium mt-2">
            {name.length <= 70 ? name : `${name.substr(0, 60)}...`}
          </h2>
          <p className="text-xs text-gray-500 pt-2 flex items-center">
            {channel}
            <span className="p-1">
              <MdVerified />
            </span>
          </p>
          <div className="flex mb-3 md:mb-0">
            <p className="text-xs text-gray-500 pr-1">{views}</p>
            <p className="text-xs text-gray-500 pr-1">{uploadTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendVideo;