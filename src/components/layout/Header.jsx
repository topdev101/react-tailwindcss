import React from "react";
import PlayButton from "../common/Button/PlayButton";
import SquareShape from "../common/shapes/square";
import brc from "../../assets/images/barcelona.png";
import realMadrid from "../../assets/images/real_madrid.png";

function Header() {
  return (
    <header className="header h-16 bg-green-800 flex justify-between items-center px-4">
      <div className="flex space-x-2 items-center text-[14px]">
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col space-y-2">
            <div className="w-7 h-5 bg-white text-center font-bold">21</div>
            <div>2</div>
          </div>
          <div className="text-white items-center flex">09.02.25</div>
          <div className="flex items-center pr-5">
            <PlayButton />
          </div>
        </div>
        <div className="flex items-center flex-row text-white space-x-2">
          <div className="">Floriana</div>
          <div className="flex items-center space-x-2">
            <div>
              <div>
                <img src={brc} alt="Barcelona" className="h-7 mt-3" />
              </div>
              <div className="pl-2">2</div>
            </div>
            <div>
              <div>|</div>
              <div>:</div>
            </div>
            <div>
              <div>
                <img src={realMadrid} alt="Barcelona" className="h-7 mt-3" />
              </div>
              <div className="pl-3">1</div>
            </div>
          </div>
          <div>Marsaxlokk</div>
        </div>
      </div>
      <div className="flex space-x-2">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </header>
  );
}

export default Header;
