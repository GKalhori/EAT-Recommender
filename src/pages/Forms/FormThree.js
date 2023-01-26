import React from "react";

export default function FormThree({ options, setOptions }) {
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
    <div className="flex flex-col w-4/5 justify-center justify-items-center content-center items-center mx-auto my-5 py-5 border-2 border-gray-500 border-opacity-30 rounded-md">
      <h2 className="mb-3 font-semibold">
        بخش سوم: ویژگی های خاصی که از یک نرم افزار مدیریتی انتظار دارید را مشخص
        کنید.
        <br />
        <small className="fw-bold">(حداقل یک گزینه را انتخاب کنید)</small>
      </h2>
      <div className="grid grid-cols-3 gap-x-10 gap-y-2 pr-20">
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
    </div>
  );
}
