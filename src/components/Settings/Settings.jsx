import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Skeleton from "../skeletons/Skeleton";

const formatKey = (key) => {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const translations = {
  "Full Name": "الاسم الكامل",
  Email: "البريد الإلكتروني",
  Username: "اسم المستخدم",
  "Phone Number": "رقم الهاتف",
  "Account Type": "نوع الحساب",
};

const InputsAccountFields = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2  w-[100%]  md:w-[48%]">
      <label htmlFor="Container Weight" className="text-[#4C535F] px-[6px]">
        {label}
      </label>
      <input
        id="Container_Weight"
        type={label === "Password" ? "password" : "text"}
        disabled
        value={value}
        className="
          bg-[#EDF2F6] rounded-lg border border-solid border-[#E0E4EC]
          px-[6px] py-[8px]
          "
      />
    </div>
  );
};

const Settings = () => {
  const jwt = localStorage.getItem("user");
  const { data } = jwtDecode(jwt);
  let csrftoken = Cookies.get("csrftoken");
  const { id } = data;
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(false);

  //useEffect to connect with user/id

  useEffect(() => {
    let csrftoken = Cookies.get("csrftoken");
    setloading(true);
    const getUserbyId = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/shipping/api/users/${id}`,
        {
          headers: {
            "X-CSRFToken": csrftoken,
          },
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD,
          },
        }
      );
      setloading(false);
      setUser(res.data);
    };
    getUserbyId();
  }, []);

  // const handelNavigationEditOrder = () => {
  //   navigate(`/${newAccountPath}`, {
  //     replace: true,
  //     state: { ...results },
  //   });
  // };

  return (
    <div className="px-4 py-6">
      <h1 className="text-center">معرف الخاص بالمستخدم : {id}</h1>
      {loading === true ? <Skeleton /> : null}

      {/* inputs fields to show info */}
      <div className="mt-4 flex items-center gap-4 flex-wrap">
        {Object.entries(user)
          .filter(
            ([key, _]) =>
              ![
                "id",
                "user_permissions",
                "groups",
                "is_superuser",
                "is_staff",
                "is_active",
                "last_login",
                "password",
              ].includes(key)
          )
          .map(([key, value]) => (
            <InputsAccountFields
              label={translations[formatKey(key)] || formatKey(key)}
              value={value}
            />
          ))}
      </div>
      <div className="flex items-center gap-2"></div>
    </div>
  );
};

export default Settings;
