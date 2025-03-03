import React from "react";

const markData = [
  {
    name: "Alvarez Denis",
    mark: 3,
    hasEye: false,
    isSelected: false,
  },
  {
    name: "Bacarisa Adrian",
    mark: 2,
    hasEye: false,
    isSelected: false,
  },
  {
    name: "Canepz Patrick",
    mark: 2,
    hasEye: false,
    isSelected: false,
  },
  {
    name: "Grech Paul",
    mark: 2,
    hasEye: true,
    isSelected: false,
  },
  {
    name: "Barcelo Jason",
    mark: 3,
    hasEye: false,
    isSelected: true,
  },
  {
    name: "Macias Michael",
    mark: 2,
    hasEye: false,
    isSelected: true,
  },
];

const MyMark = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="bg-white min-w-fa-pull-left">
          <thead className="text-white bg-green-800 opacity-90">
            <tr>
              <th className="w-24 px-4">Minute</th>
              <th className="w-24 px-4">Time</th>
              <th className="px-4 w-[600px] text-left">
                Topic <br />
                subtopic
              </th>
            </tr>
          </thead>
          <tbody className="h-[70px]">
            <tr>
              <td className="px-4 bg-green-200">Row 1 Col 1</td>
              <td className="px-4 bg-green-200">0:01</td>
              <td className="px-4 bg-green-200">
                <b>Lack of respect</b>
                <br />
                Tripping
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-5 ml-4 bg-green-100">
        <div className="mb-2 font-bold text-green-800">My mark:</div>
        <div className="flex flex-row bg-gradient-to-r from-white to-[yellow] w-min">
          <div className="px-5 border border-black">1</div>
          <div className="px-5 border border-black">2</div>
          <div className="px-5 border border-black">3</div>
          <div className="px-5 border border-black">4</div>
        </div>
        <div className="mt-4 font-bold text-green-800">
          Similar incident:{" "}
          <input className="w-12 mx-2 mr-10 border border-black rounded-md" />
          <input className="w-12 border border-black rounded-md" />
        </div>
        <div className="px-2 my-4">
          <textarea className="w-full h-20 resize-none" placeholder="Comment" />
        </div>
        <div className="mb-8">
          <button
            type="button"
            className="text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
          >
            Save
            <svg
              className="w-3 h-5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="text-white  hover:bg-green-800 bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:hover:bg-green-800"
          >
            Save and next
            <svg
              className="w-3 h-5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
        <div className="ml-2">
          {markData.map((data, index) => (
            <div
              key={index}
              className={`flex flex-row pl-2 items-center justify-between pb-2 border-b border-gray-400 ${
                data.isSelected ? "bg-green-300" : ""
              }`}
            >
              <div className="flex flex-row items-center mt-2">
                <div className="bg-[yellow] w-9 text-center border border-black px-2 mr-3">
                  {data.mark}
                </div>
                {data.name}
              </div>
              {data.hasEye && (
                <svg
                  className="w-6 h-6 text-green-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.5v-2m0 16v-2"
                  />
                </svg>
              )}
              {data.isSelected && (
                <svg
                  className="w-6 h-6 text-green-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMark;
