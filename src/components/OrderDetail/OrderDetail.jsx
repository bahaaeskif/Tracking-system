import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import InputsFields from "./InputsFields";
import { convertDate } from "../../utility";
import Accordion from "../Accordion/Accordion";
const translations = {
  "Container Weight": "وزن الحاوية",
  "Container Dimensions": "أبعاد الحاوية",
  Date: "التاريخ",
  "Tracking Number": "رقم التتبع",
  Cartons: "الكراتين",
  "Shipment Method": "طريقة الشحن",
  "Shipment Id": "معرف الشحن",
  "Estimated Arrival Time": "الوقت المتوقع للوصول",
  Note: "الملاحظات",
};

const formatKey = (key) => {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const OrderDetail = ({ results }) => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-start items-start flex-col md:flex-row md:justify-center md:items-center w-fit mt-2">
        <div className="flex items-center gap-4 mr-2 md:pl-4  md:border-l border-solid border-[#3268be]">
          <span className="text-[#667085]">تاريخ الطلب : </span>
          <span className="font-medium text-[#1D2939]">
            {convertDate(results?.date)}
          </span>
        </div>
        <div className="flex items-center gap-2 mr-2 mt-2 md:pr-4 text-[#12B76A]">
          <CiDeliveryTruck size={30} />
          <span className="font-medium">
            الوقت المتوقع للوصول: {results?.estimated_arrival_time}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 flex-wrap mr-2">
        {results &&
          Object.entries(results)
            .filter(
              ([key, _]) =>
                !["id", "user", "shipment_status", "order_status"].includes(key)
            )
            .map(([key, value]) => (
              <InputsFields
                value={value}
                label={translations[formatKey(key)] || formatKey(key)}
              />
            ))}
      </div>
    </div>
  );
};

export default OrderDetail;
