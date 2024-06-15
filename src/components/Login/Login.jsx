import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import Cookies from "js-cookie";

import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.png";

import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //hide - show password
  const [show_input, setShowInput] = useState(false);

  const handelMask = () => {
    setShowInput((pre) => !pre);
  };

  const navigate = useNavigate();

  const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z
      .string()
      .min(1, "Password are required and atleast 8 charachter"),
  });

  const onSubmit = async (data) => {
    let csrftoken = Cookies.get("csrftoken");

    const id = toast.loading("جاري تسجيل الدخول...");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/shipping/login/`,
        data,
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
      const { jwt } = response.data;

      const decodedToken = jwtDecode(jwt);
      console.log("🚀 ~ onSubmit ~ decodedToken:", decodedToken);

      toast.update(id, {
        render: "تم تسجييل الدخول بنجاح ",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });

      if (response.data.jwt) {
        localStorage.setItem("user", jwt);

        navigate("/", { replace: true });
      }
    } catch (error) {
      toast.update(id, {
        render: "تأكد من المعلومات المدخلة",
        type: "error",
        isLoading: false,
        autoClose: 2500,
      });
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  return (
    <div className="flex flex-col justify-center items-center h-[85vh] md:h-screen lg:h-screen  gap-12">
      <ToastContainer rtl autoClose={2500} />
      <img
        src={vector}
        alt=""
        className="fixed top-0 left-0 w-[100px] md:w-[150px] lg:w-[150px]"
      />
      <img
        src={vector1}
        alt=""
        className="fixed bottom-0 left-0 w-[100px] md:w-[150px] lg:w-[150px]"
      />
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-[18px] md:text-[23px] lg:text-[23px] ">
          تسجيل الدخول الى نظام تتبع الطلبات
        </h1>
      </div>
      <div className=" flex justify-center items-center">
        <form
          className="flex justify-center items-center flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col justify-center">
            <label
              className="text-[#4C535F] px-[6px] mb-2 text-right"
              htmlFor="username"
            >
              اسم المستخدم
            </label>
            <input
              {...register("username")}
              placeholder="اسم المستخدم..."
              className="bg-[#EDF2F6] w-[330px] md:w-[400px] lg:w-[400px]  rounded-lg border border-solid border-[#E0E4EC]
        px-[6px] py-[8px] outline-none"
              name="username"
              id="username"
            />
            <div className="mt-1 text-red-500">{errors.username?.message}</div>
          </div>
          <div className="flex flex-col justify-center">
            <label
              className="text-[#4C535F] px-[6px] mb-2 text-right"
              htmlFor="password"
            >
              كلمة المرور
            </label>
            <div className="flex">
              <input
                {...register("password")}
                placeholder="كلمة المرور..."
                className="bg-[#EDF2F6] w-[300px] md:w-[400px] lg:w-[375px] rounded-tr-lg rounded-br-lg border border-solid border-[#E0E4EC]
        px-[6px] py-[8px] outline-none"
                type={show_input ? "text" : "password"}
                name="password"
                id="password"
              />
              <div
                className="bg-[#EDF2F6] flex justify-center items-center w-fit  rounded-tl-lg rounded-bl-lg  border border-solid border-[#E0E4EC]
        px-[6px] py-[8px] "
                onClick={handelMask}
              >
                {show_input === true ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <div className="mt-1 text-red-500">{errors.password?.message}</div>
          </div>
          <button className="mt-3 md:mt-12 lg:mt-12 px-8 md:px-16 lg:px-16 py-2 text-white self-baseline bg-[#39467D]   rounded-lg">
            تسجيل دخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
