import React from "react";

const Info = () => {
  return (
    <>
      <img
        src="Rectangle 90.png"
        alt="Laura Smith"
        className="w-full object-cover"
      />
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold">Laura Smith</h1>
        <p className="text-[#F3BF99] text-sm mt-1">Frontend Developer</p>
        <p className="text-gray-400 text-xs mt-2">laurasmith.website</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-md font-medium shadow-sm hover:bg-gray-100">
            📧 Email
          </button>
          <button className="flex items-center gap-2 bg-[#5093E2] text-white px-4 py-2 rounded-md font-medium shadow-sm hover:bg-[#3b82d6]">
            💼 LinkedIn
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
