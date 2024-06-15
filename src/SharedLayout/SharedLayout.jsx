import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { LoginPath, fAQPath, homePath, settingsPath } from "../Routes";
import Whatsapp from "../components/Whatsapp";
const SharedLayout = () => {
  const navigate = useNavigate();

  const handelLogOut = () => {
    localStorage.removeItem("user");
    navigate(`/${LoginPath}`);
  };
  return (
    <div className="">
      <Navbar />
      <Whatsapp
        link={
          "https://api.whatsapp.com/message/BZGUDNNZNFOZN1?autoload=1&app_absent=0"
        }
      />
      <Outlet />
      <div className="mt-32">
        <footer class="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-right">
          <div class="flex items-center justify-center border-y-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
            <div class="me-12 hidden lg:block">
              <span>تابعنا على وسائل التواصل الاجتماعي</span>
            </div>
            <div class="flex justify-center">
              <a
                href="https://www.instagram.com/dr.shipkw"
                class="me-6 [&>svg]:h-4 [&>svg]:w-4"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/dr-shipkw"
                class="me-6 [&>svg]:h-4 [&>svg]:w-4"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>

          <div class="mx-6 py-10 text-center md:text-right">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div class="">
                <h6 class="text-[#091242] mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <span class="me-3 [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                  </span>
                  نظام تتبع الشحنات
                </h6>
                <p>
                  نقدم أفضل ما بوسعنا لأن نكون رائدين في هذه الصناعة فهي نمط
                  حياتنا التي نعمل لأجله, و جعلك كعميل فرداً من هذه الحياه هو
                  مهمتنا في د.شيب
                </p>
              </div>

              <div>
                <h6 class=" text-[#091242] mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  الصفحات
                </h6>
                <ul className="!text-black flex flex-col gap-2">
                  <li>
                    <NavLink
                      to={homePath}
                      className="block text-center py-2 px-3 text-black pb-1  rounded md:text-right"
                      aria-current="page"
                    >
                      تتبع الشحنة
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={settingsPath}
                      className="block text-center py-2 px-3 text-black pb-1  rounded md:text-right"
                    >
                      الإعدادات
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={fAQPath}
                      className="block text-center py-2 px-3 text-black pb-1  rounded md:text-right"
                    >
                      أسئلة الشائعة
                    </NavLink>
                  </li>
                  <li onClick={handelLogOut}>
                    <span className="block text-center py-2 px-3 text-black pb-1  rounded md:text-right cursor-pointer">
                      تسجيل الخروج
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h6 class="text-[#091242] mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  تواصل معنا
                </h6>

                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <span class="text-[#091242] me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </span>
                  <a
                    href="mailto:Contact@drship.com
"
                  >
                    Contact@drship.com
                  </a>
                </p>
                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <span class="text-[#091242] me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  65881198 00965 - 22281554 00965
                </p>
              </div>
            </div>
          </div>

          <div class="bg-black/5 p-6 text-center">
            <span>© 2024 حقوق النشر محفوظة </span>
            <a
              class="font-semibold text-[#091242]"
              href="https://tw-elements.com/"
            >
              لشركة DR.Ship
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SharedLayout;
