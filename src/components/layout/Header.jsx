import React from "react";
import PlayButton from "../common/Button/PlayButton";
import brc from "../../assets/images/barcelona.png";
import realMadrid from "../../assets/images/real_madrid.png";

function Header() {
  return (
    <header className="header h-[90px] bg-green-900 flex justify-between items-center px-4">
      <div className="flex space-x-2 items-center text-[14px]">
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col space-y-2">
            <div className="h-5 font-bold text-center bg-white w-7">21</div>
            <div>2</div>
          </div>
          <div className="flex items-center text-white">09.02.25</div>
          <div className="flex items-center pr-5">
            <PlayButton />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 text-white">
          <div className="">Floriana</div>
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
