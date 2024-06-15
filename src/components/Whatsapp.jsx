import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = ({ link }) => {
  return (
    <div className="heartbeat rounded-[50%] p-3 bg-green-600 w-fit fixed bottom-[35px] right-[35px] z-50">
      <a href={link} target="_blank" className="">
        <FaWhatsapp color="white" size={23} />
      </a>
    </div>
  );
};

export default Whatsapp;
