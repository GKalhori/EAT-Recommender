import React, { useState } from "react";

import Form_1 from "./Form_1";
import Form_2 from "./Form_2";
import Form_3 from "./Form_3";
import Form_4 from "./Form_4";

export const form = [<Form_1 />, <Form_2 />, <Form_3 />, <Form_4 />];

function Forms() {
  const activeTab = {
    li: "flex items-center text-blue-600 font-semibold flex-col gap-2 dark:text-blue-500 space-x-2.5",
    span: "flex items-center justify-center w-8 h-8 border border-blue-600 bg-blue-600 text-white rounded-full shrink-0 dark:border-blue-500",
  };

  const deactiveTab = {
    li: "flex items-center text-gray-500 font-semibold flex-col gap-2 dark:text-gray-400 space-x-2.5",
    span: "flex items-center justify-center w-8 h-8 border border-gray-500 bg-gray-500 text-white rounded-full shrink-0 dark:border-gray-400",
  };

  const [currentForm, setCurrentForm] = useState(1);

  return (
    <div>
      <ol className="items-center justify-between w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        <li className={currentForm == 1 ? activeTab.li : deactiveTab.li}>
          <span
            className={currentForm == 1 ? activeTab.span : deactiveTab.span}
          >
            1
          </span>
          <span>
            <h3 className="leading-tight">مشخصات عمومی</h3>
          </span>
        </li>

        <hr className="text-black w-20" />

        <li className={currentForm == 2 ? activeTab.li : deactiveTab.li}>
          <span
            className={currentForm == 2 ? activeTab.span : deactiveTab.span}
          >
            2
          </span>
          <span>
            <h3 className="leading-tight">نوع سازمان</h3>
          </span>
        </li>

        <hr className="text-black w-20" />

        <li className={currentForm == 3 ? activeTab.li : deactiveTab.li}>
          <span
            className={currentForm == 3 ? activeTab.span : deactiveTab.span}
          >
            3
          </span>
          <span>
            <h3 className="leading-tight">قابلیت های خاص</h3>
          </span>
        </li>

        <hr className="text-black w-20" />

        <li className={currentForm == 4 ? activeTab.li : deactiveTab.li}>
          <span
            className={currentForm == 4 ? activeTab.span : deactiveTab.span}
          >
            4
          </span>
          <span>
            <h3 className="leading-tight">ویژگی های کلیدی</h3>
          </span>
        </li>
      </ol>

      {form[currentForm - 1]}

      <div className="flex flex-row gap-4">
        <button
          className="step-trigger text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setCurrentForm(currentForm - 1)}
        >
          مرحله قبل
        </button>
        <button
          className="step-trigger text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setCurrentForm(currentForm + 1)}
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
}

export default Forms;
