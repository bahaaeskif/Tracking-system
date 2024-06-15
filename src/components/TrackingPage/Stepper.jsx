import React, { useState, useEffect } from "react";
import { Steps } from "keep-react";

const Stepper = ({ results }) => {
  const activeColor = "text-[#3a5271] font-bold";
  const activeBg = "bg-[#3a5271] border-[#3a5271]";

  const completeColor = "text-black";
  const completeBg = "bg-[#3a5271]";

  const unCompleteColor = "text-[#a0a0a1]";
  const unCompleteBg = "bg-[#a0a0a1]";

  useEffect(() => {}, [results]);

  return (
    <div className="ltr p-4 border border-solid   rounded-md w-full">
      <Steps className="flex flex-row-reverse">
        <Steps.Item
          active={results?.order_status === "ORDER CONFIRMED" ? true : false}
          completed={
            results?.order_status === "SHIPPED" ||
            results?.order_status === "OUT FOR DELIVERY" ||
            results?.order_status === "ORDER DELIVERED"
              ? true
              : false
          }
          stepStyle={`${
            results?.order_status === "ORDER CONFIRMED"
              ? activeBg
              : `${
                  results?.order_status === "SHIPPED" ||
                  results?.order_status === "OUT FOR DELIVERY" ||
                  results?.order_status === "ORDER DELIVERED"
                    ? completeBg
                    : unCompleteBg
                }`
          }  w-[24px] h-[16px] mt-[14px] `}
          titleStyle={`
          ${
            results?.order_status === "ORDER CONFIRMED"
              ? activeColor
              : ` ${
                  results?.order_status === "SHIPPED" ||
                  results?.order_status === "OUT FOR DELIVERY" ||
                  results?.order_status === "ORDER DELIVERED"
                    ? completeColor
                    : unCompleteColor
                }`
          }
         
          `}
          descriptionStyle={` ${
            results?.order_status === "ORDER CONFIRMED"
              ? activeColor
              : `${
                  results?.order_status === "SHIPPED" ||
                  results?.order_status === "OUT FOR DELIVERY" ||
                  results?.order_status === "ORDER DELIVERED"
                    ? completeColor
                    : unCompleteColor
                }`
          }
          
          `}
          title="قبول الطلب"
          className="flex-1 "
        />
        <Steps.Item
          active={results?.order_status === "SHIPPED" ? true : false}
          completed={
            results?.order_status === "OUT FOR DELIVERY" ||
            results?.order_status === "ORDER DELIVERED"
              ? true
              : false
          }
          stepStyle={`${
            results?.order_status === "SHIPPED"
              ? activeBg
              : `${
                  results?.order_status === "OUT FOR DELIVERY" ||
                  results?.order_status === "ORDER DELIVERED"
                    ? completeBg
                    : unCompleteBg
                }`
          }  w-[24px] h-[16px] mt-[14px] `}
          titleStyle={`
          ${
            results?.order_status === "SHIPPED"
              ? activeColor
              : `${
                  results?.order_status === "OUT FOR DELIVERY" ||
                  results?.order_status === "ORDER DELIVERED"
                    ? completeColor
                    : unCompleteColor
                }`
          }
          
          `}
          descriptionStyle={`
          ${
            results?.order_status === "SHIPPED"
              ? activeColor
              : ` ${
                  results?.order_status === "OUT FOR DELIVERY" ||
                  results?.order_status === "ORDER DELIVERED"
                    ? completeColor
                    : unCompleteColor
                }`
          }
         
          `}
          title="تم شحنها"
          className="flex-1"
        />
        <Steps.Item
          active={results?.order_status === "OUT FOR DELIVERY" ? true : false}
          completed={results?.order_status === "ORDER DELIVERED" ? true : false}
          title="على طريق"
          stepStyle={`${
            results?.order_status === "OUT FOR DELIVERY"
              ? activeBg
              : ` ${
                  results?.order_status === "ORDER DELIVERED"
                    ? completeBg
                    : unCompleteBg
                }`
          }  w-[24px] h-[16px] mt-[14px] `}
          titleStyle={`
          ${
            results?.order_status === "OUT FOR DELIVERY"
              ? activeColor
              : `${
                  results?.order_status === "ORDER DELIVERED"
                    ? completeColor
                    : unCompleteColor
                }`
          }
          
          `}
          descriptionStyle={`
          ${
            results?.order_status === "OUT FOR DELIVERY"
              ? activeColor
              : `${
                  results?.order_status === "ORDER DELIVERED"
                    ? completeColor
                    : unCompleteColor
                }`
          }
          
          `}
          className="flex-1"
        />
        <Steps.Item
          active={results?.order_status === "ORDER DELIVERED" ? true : false}
          title="وصلت شحنتك"
          stepStyle={`${
            results?.order_status === "ORDER DELIVERED"
              ? activeBg
              : unCompleteBg
          } w-[24px] h-[16px] mt-[14px] `}
          titleStyle={`
          ${
            results?.order_status === "ORDER DELIVERED"
              ? activeColor
              : unCompleteColor
          }`}
          descriptionStyle={`
          ${
            results?.order_status === "ORDER DELIVERED"
              ? activeColor
              : unCompleteColor
          }`}
          className="flex-1"
        />
      </Steps>
    </div>
  );
};

export default Stepper;
