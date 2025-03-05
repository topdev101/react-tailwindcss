import React from "react";
import PlayButton from "../UI/buttons/PlayButton";
import brc from "../../assets/images/barcelona.png";
import realMadrid from "../../assets/images/Real Madrid.png";
import StarButton from "../UI/buttons/StarButton";
import DownIcon from "../UI/shapes/DownIcon";

function Header() {
  return (
    <header className="header h-[90px] bg-green-900 flex justify-between items-center px-4">
      <div className="flex space-x-2 items-center text-[14px]">
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col items-center justify-center mt-4 space-y-2">
            <div className="h-7 mb-[-6px] font-bold text-center pt-0.5 border border-black bg-white w-9">
              21
            </div>
            <div className="flex items-center justify-center">
              <DownIcon />
            </div>
          </div>
          <div className="flex items-center text-white">09.02.25</div>
          <div className="flex items-center pr-5">
            <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#1e7c06]">
              <div className="absolute top-[3px] left-[9px] w-0 h-0 border-t-[9px] border-t-transparent border-l-[9px] border-l-white border-b-[9px] border-b-transparent"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 text-white">
          <div className="">Barcelona</div>
          <div className="flex items-center space-x-2">
            <div>
              <div>
                <img src={brc} alt="Barcelona" className="mt-3 h-7" />
              </div>
              <div className="pl-2">2</div>
            </div>
            <div>
              <div>|</div>
              <div>:</div>
            </div>
            <div>
              <div>
                <img src={realMadrid} alt="Barcelona" className="mt-3 h-7" />
              </div>
              <div className="pl-2">1</div>
            </div>
          </div>
          <div>Real Madrid</div>
        </div>
      </div>
      <div className="flex space-x-2">
        <StarButton />
      </div>
    </header>
  );
}

export default Header;
