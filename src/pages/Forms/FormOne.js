import React from "react";

export default function FormOne({ options, setOptions }) {
  const updateCheckStatus = (index) => {
    setOptions(
      options.map((option, currentIndex) =>
        currentIndex === index
          ? { ...option, checked: !option.checked }
          : option
      )
    );
  };

  return (
    <div className="page-section container flex w-3/6 items-start flex-col mx-auto my-5 py-5 px-7 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="mb-2 font-semibold">
        بخش اول: ویژگی های عمومی که از یک نرم افزار مدیریت پروژه های معماری
        سازمانی انتظار دارید را انتخاب کنید.
      </h2>
      {options.map((option, index) => (
        <div className="form-check flex gap-2" key={index}>
          <input
            className="form-check flex gap-2-input"
            type="checkbox"
            id={option.id}
            checked={option.checked}
            onChange={() => updateCheckStatus(index)}
          />
          <label className="form-check flex gap-2-label" htmlFor={option.id}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
}
