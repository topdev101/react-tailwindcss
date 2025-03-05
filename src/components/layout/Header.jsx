import React from "react";
import PlayButton from "../UI/Button/PlayButton";
import brc from "../../assets/images/barcelona.png";
import realMadrid from "../../assets/images/Real Madrid.png";
import StarButton from "../UI/Button/StarButton";
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
            <PlayButton />
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
              <div className="pl-3">1</div>
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
