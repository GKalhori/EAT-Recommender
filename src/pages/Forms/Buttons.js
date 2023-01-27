import React from "react";

export default function Buttons({ currentStep, setCurrentStep, handleForm }) {
  return (
    <div className="flex flex-row gap-4 items-center justify-center my-4">
      <button
        className={`text-white text-sm px-5 py-2.5 text-center font-medium rounded-lg ${
          currentStep === 1
            ? "bg-gray-500"
            : "bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
        }`}
        disabled={currentStep === 1 ? true : false}
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        مرحله قبل
      </button>
      <button
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => {
          if (currentStep < 4) setCurrentStep(currentStep + 1);
          else handleForm();
        }}
      >
        {currentStep < 4 ? "مرحله بعد" : "مشاهده نتیجه"}
      </button>
    </div>
  );
}
