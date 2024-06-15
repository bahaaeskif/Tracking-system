import React from "react";
import { convertDate } from "../../utility";

const InputsFields = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2 w-[100%] md:w-[48%]">
      <label htmlFor="Container Weight" className="text-[#4C535F] px-[6px]">
        {label}
      </label>
      <input
        id=""
        type="text"
        disabled
        value={label === "Date" ? convertDate(value) : value}
        className="
        bg-[#EDF2F6] rounded-lg border border-solid border-[#E0E4EC]
        px-[6px] py-[8px]
        "
      />
    </div>
  );
};

export default InputsFields;
