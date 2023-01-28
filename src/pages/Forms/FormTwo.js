import React from "react";
import { organization } from "./data";

export default function FormTwo({ selected, setSelected }) {
  return (
    <div className="page-section container flex w-2/6 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <div className="flex flex-col items-start my-0 mx-auto">
        <h2 className="mb-2 font-semibold">
          بخش دوم: نوع سازمان/شرکت خود را انتخاب کنید.
        </h2>
        <div className="grid grid-cols-2 mx-auto gap-x-4">
          {organization.map((option, index) => (
            <div className="form-radio flex gap-2" key={index}>
              <input
                className="form-radio flex gap-2-input"
                type="radio"
                name="org"
                id={option.id}
                checked={option.id === selected ? true : false}
                onChange={() => setSelected(option.id)}
              />
              <label
                className="form-radio flex gap-2-label"
                htmlFor={option.id}
              >
                {option.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
