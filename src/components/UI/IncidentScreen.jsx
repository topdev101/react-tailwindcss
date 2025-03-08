import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import ImageScreen from "./ImageScreen";
import { pagiNationData, screenData } from "../../utils/Constant";
import GreenButton from "./buttons/GreenButton";
import { Calendar } from "./svgs/Calendar";

const animatedComponents = makeAnimated();

const MultiValueLabelCustom = (props) => {
  if (props.data.value === "4") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            backgroundColor: "yellow",
            border: "1px solid black",
            color: "black",
            display: "inline-flex",
            width: "25px",
            marginLeft: "5px",
            height: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          4
        </span>
        <span style={{ marginLeft: 4, marginBottom: 4 }}>|</span>
      </div>
    );
  }
  return <components.MultiValueLabel {...props} />;
};

const customComponents = {
  ...animatedComponents,
  MultiValueLabel: MultiValueLabelCustom,
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "37px",
    width: "100%",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#d0e8c8",
    minHeight: "28px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "black",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "black",
    ":hover": {
      backgroundColor: "#d0e8c8",
      color: "black",
    },
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

const colourOptions = [
  { value: "Severity", label: "Severity |" },
  { value: "Studs directed high", label: "Studs directed high |" },
  { value: "4", label: "4 |" },
];

const sortFieldOptions = [
  { value: "By Date", label: "By Date" },
  { value: "severity", label: "Severity" },
  { value: "topic", label: "Topic" },
];

const sortOrderOptions = [
  { value: "desc", label: "Decreasing" },
  { value: "asc", label: "Increasing" },
];

const IncidentScreen = () => {
  const [num1, setNum1] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="mx-4 my-2">
      <div className="flex justify-between">
        <div className="pt-2 text-[#1f622f] font-bold text-[20px]">
          Similar incidents
        </div>
        <div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="py-2 bg-[#428751] px-4 rounded-t-md mr-3 text-white"
          >
            Filter / Sort
          </button>
        </div>
      </div>

      <div
        className={twMerge(
          "overflow-hidden transition-all duration-500",
          showFilter ? "max-h-[1000px]" : "max-h-0"
        )}
      >
        <div className="flex flex-col sm:flex-row gap-4 bg-[#428751] p-4 text-black">
          <div className="flex flex-wrap gap-4 pr-4 border-r border-r-blue-50">
            <div className="flex flex-col gap-5">
              <div className="w-full sm:w-[260px]">
                <p className="text-white">Season:</p>
                <input
                  className="h-[37px] w-full border rounded-md border-gray-300"
                  type="text"
                />
              </div>
              <div className="w-full sm:w-[260px] text-black">
                <p className="text-white">Topic:</p>
                <Select
                  defaultValue={colourOptions[0]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  components={customComponents}
                  styles={customStyles}
                  menuPortalTarget={document.body}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full sm:w-[260px]">
                <p className="text-white">From Dates:</p>
                <div className="flex items-center gap-1">
                  <div className="flex items-center w-[100px]">
                    <input
                      placeholder="dd.mm.yyyy"
                      className="h-[37px] w-full border border-gray-300 rounded-md text-black px-2"
                    />
                  </div>
                  <div className="cursor-pointer">
                    <Calendar />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center w-[100px]">
                      <input
                        placeholder="dd.mm.yyyy"
                        className="h-[37px] w-full border border-gray-300 rounded-md text-black px-2"
                      />
                    </div>
                    <div className="cursor-pointer">
                      <Calendar />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-[260px]">
                <p className="text-white">Subtopic:</p>
                <Select
                  defaultValue={colourOptions[1]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  components={customComponents}
                  styles={customStyles}
                  menuPortalTarget={document.body}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full sm:w-[260px]">
                <p className="text-white">Team:</p>
                <input
                  className="h-[37px] w-full border rounded-md border-gray-300"
                  type="text"
                />
              </div>
              <div className="w-full sm:w-[260px] text-black">
                <p className="text-white">Scale:</p>
                <Select
                  defaultValue={colourOptions[2]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  components={customComponents}
                  styles={customStyles}
                  menuPortalTarget={document.body}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full sm:w-[260px]">
                <p className="text-white">Referee:</p>
                <input
                  className="h-[37px] w-full border rounded-md border-gray-300"
                  type="text"
                />
              </div>
              <div className="w-full sm:w-[260px]">
                <p className="text-[#428751]">Search</p>
                <GreenButton color={"bg-[#428751]"} label={"Search"} />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-white">Sort:</p>
            <div className="flex flex-col gap-2">
              <div className="w-full sm:w-[260px]">
                <Select
                  name="sortField"
                  components={customComponents}
                  styles={customStyles}
                  menuPortalTarget={document.body}
                  defaultValue={sortFieldOptions[0]}
                  options={sortFieldOptions}
                  className="basic-multi-select"
                  placeholder={""}
                />
              </div>
              <div className="w-full sm:w-[260px]">
                <Select
                  name="sortOrder"
                  components={customComponents}
                  styles={customStyles}
                  menuPortalTarget={document.body}
                  defaultValue={sortOrderOptions[0]}
                  options={sortOrderOptions}
                  className="basic-multi-select"
                  placeholder={""}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <GreenButton label={"Sort"} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="flex gap-1 p-2 font-bold text-white">
          {pagiNationData.map((item, index) => (
            <div
              key={index}
              className={twMerge(
                "px-2 py-1 bg-[#1f622f] rounded-md cursor-pointer",
                num1 === item ? "bg-[#a5a5a5]" : ""
              )}
              onClick={() => setNum1(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mx-2">
          {screenData.map((data, index) => (
            <div key={index} className="w-[250px] h-[220px]">
              <ImageScreen data={data} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white ">
        <div className="flex gap-1 p-2 font-bold text-white">
          {pagiNationData.map((item, index) => (
            <div
              key={index}
              className={twMerge(
                "px-2 py-1 bg-[#1f622f] rounded-md cursor-pointer",
                num1 === item ? "bg-[#a5a5a5]" : ""
              )}
              onClick={() => setNum1(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncidentScreen;
