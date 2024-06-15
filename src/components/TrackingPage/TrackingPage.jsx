import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Skeleton from "../skeletons/Skeleton";
import Stepper from "./Stepper";
import OrderDetail from "../OrderDetail/OrderDetail";
import Accordion from "../Accordion/Accordion";
const TrackingPage = () => {
  const [orders, setOrders] = useState([]);
  const [foundOrder, setFoundOrder] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getAllOrders = async () => {
      setloading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_URL}${import.meta.env.VITE_API}${
          import.meta.env.VITE_ORDERS
        }/?all=True`,
        {
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD,
          },
        }
      );
      const jwt = localStorage.getItem("user");
      const { data } = jwtDecode(jwt);
      const { id, account_type } = data;

      let filteredOrders;
      if (id === 6) {
        filteredOrders = res.data.results; // If the user ID is 6, assign all orders to filteredOrders
      } else {
        filteredOrders = res.data.results.filter(
          (order) => order.user === id // Otherwise, filter the orders based on the user ID
        );
      }

      setloading(false);
      setOrders(filteredOrders);
    };

    getAllOrders();
  }, []);

  const handleSearch = () => {
    const order = orders.find(
      (order) =>
        order.shipment_id === searchId || order.tracking_number === searchId
    );
    setFoundOrder(order);
  };

  return (
    <div>
      {loading === true ? (
        <Skeleton />
      ) : (
        <div className="mt-8 flex flex-col justify-center items-center">
          <label
            htmlFor="Container Weight"
            className="text-[#4C535F] mb-[12px]  px-[6px]"
          >
            {"ادخل الـ Shipment ID : "}
          </label>
          <input
            placeholder="Shipment ID"
            type={"text"}
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="
        bg-[#EDF2F6] rounded-lg border border-solid border-[#E0E4EC]
        px-[6px] py-[8px] mb-4 w-[350px]
        "
          />
          <button
            onClick={handleSearch}
            className="ml-3 px-16 py-2 text-white bg-[#091242]  rounded-lg"
          >
            تتبع شحنتي
          </button>
        </div>
      )}
      {/* <div className="mt-[30px] mx-1 md:mx-16">
        <div className="mr-1 mb-2">حالة شحنتك :</div>
        <Stepper results={foundOrder} />
      </div> */}

      {/* <div
        // id="accordion-open"
        // data-accordion="open"
        className="mt-[30px] mx-2 md:mx-16"
      >
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            // aria-controls="accordion-open-body-1"
          >
            <span class="text-[#091242] flex items-center">
              <svg
                class="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              حالة شحنتك
            </span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
        // id="accordion-open-body-1"
        // class="hidden"
        // aria-labelledby="accordion-open-heading-1"
        >
          <div className="">
            <Stepper results={foundOrder} />
          </div>
        </div>

        <h2
        //  id="accordion-open-heading-2"
        >
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            // data-accordion-target="#accordion-open-body-2"
            aria-expanded="true"
            // aria-controls="accordion-open-body-2"
          >
            <span class="text-[#091242] flex items-center">
              <svg
                class="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              تفاصيل شحنتك{" "}
            </span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          // id="accordion-open-body-2"
          class=""
          // aria-labelledby="accordion-open-heading-2"
        >
          {foundOrder && <OrderDetail results={foundOrder} />}
          {!foundOrder && <p className="mt-8 text-center">ادخل معرف الشحنة</p>}
        </div>
      </div> */}

      <div className="mt-[30px] mx-2 md:mx-16">
        <Accordion title="حالة شحنتك">
          <div>
            <Stepper results={foundOrder} />
          </div>
        </Accordion>
        <Accordion title="تفاصيل شحنتك">
          {foundOrder ? (
            <OrderDetail results={foundOrder} />
          ) : (
            <p className="mt-8 text-center">ادخل معرف الشحنة</p>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default TrackingPage;
