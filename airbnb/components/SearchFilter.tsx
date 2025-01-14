'use client';
import { useState } from "react";
import CustomButton from "./CustomButton";
const logo = (
  <svg
    viewBox="0 0 32 32"
    style={{
      display: "block",
      fill: "none",
      height: "16px",
      width: "16px",
      stroke: "currentColor",
      strokeWidth: 4,
      overflow: "visible",
    }}
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      fill="none"
      d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
    ></path>
  </svg>
);
const SearchFilter = ({}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => setIsInputFocused(false);

  return (
    <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="w-[250xpx] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Where</p>
        <input
          className="text-sm bg-transparent"
          type="text"
          placeholder="Search destinations"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Check in</p>
        <input
          className="text-sm bg-transparent"
          type="text"
          placeholder="Add dates"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Check out</p>
        <input
          className="text-sm bg-transparent"
          type="text"
          placeholder="Add dates"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Who</p>
        <input
          className="text-sm bg-transparent"
          type="text"
          placeholder="Add guests"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="p-2">
        <CustomButton text={"Search"} logo={logo}showLogo={true} showText={isInputFocused} />
      </div>
    </div>
  );
};

export default SearchFilter;
