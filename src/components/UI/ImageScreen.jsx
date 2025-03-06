import React from "react";
import { Message } from "./svgs/Message";

const ImageScreen = ({ data }) => {
  return (
    <div className="image-container">
      <div>
        <img
          src={data.screenUrl}
          className="w-full h-auto border border-black"
          alt="No Screen"
        />
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col justify-center">
          <div>{data.date}</div>
          <div className="flex items-center justify-center">
            <img
              src={data.teamAvatarUrl}
              className="w-5 h-5"
              alt="Team Avatar"
            />
            <div className="text-[#2c782e]">{data.teamName},</div>
            {data.member}
          </div>
        </div>
        <div className="relative mt-2">
          <div className="px-4 py-1 font-bold bg-[#feff01] border border-black">
            {data.num}
          </div>
          {data.hasComment ? (
            <div className="absolute top-[-9px] right-[-7px]">
              <Message />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageScreen;
