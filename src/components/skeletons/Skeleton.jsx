import React from "react";

const Skeleton = () => {
  return (
    <div>
      <div
        role="status"
        class=" animate-pulse flex items-center gap-4 flex-wrap  mt-[30px]"
      >
        <div class="h-8 bg-gray-200 rounded-full  w-[100%] mb-4  md:w-[48%]"></div>
        <div class="h-8 bg-gray-200 rounded-full w-[100%] mb-4  md:w-[48%]"></div>
        <div class="h-8 bg-gray-200 rounded-full w-[100%] mb-4  md:w-[48%]"></div>
        <div class="h-8 bg-gray-200 rounded-full w-[100%] mb-4  md:w-[48%]"></div>
        <div class="h-8 bg-gray-200 rounded-full w-[100%] mb-4  md:w-[48%]"></div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Skeleton;
