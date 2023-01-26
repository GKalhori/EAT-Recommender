import React, { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import { steps, general, factors, features } from "./data";

function Forms() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formOneOptions, setFormOneOptions] = useState(general);
  const [formTwoSelected, setFormTwoSelected] = useState(null);
  const [formThreeOptions, setFormThreeOptions] = useState(features);
  const [formFourOptions, setFormFourOptions] = useState(factors);

  const form = [
    <FormOne options={formOneOptions} setOptions={setFormOneOptions} />,
    <FormTwo selected={formTwoSelected} setSelected={setFormTwoSelected} />,
    <FormThree options={formThreeOptions} setOptions={setFormThreeOptions} />,
    <FormFour options={formFourOptions} setOptions={setFormFourOptions} />,
  ];

  return (
    <div className="my-4">
      <ol className="flex flex-row items-center justify-center gap-3 sm:flex sm:space-x-8 sm:space-y-0">
        {steps.map((step) => (
          <li
            key={step.id}
            className={`flex flex-col w-36 items-center font-semibold gap-2 ${
              currentStep === step.id ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border text-white rounded-full shrink-0 ${
                currentStep === step.id
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-500 bg-gray-500"
              }`}
            >
              {step.id}
            </span>
            <span>
              <h3 className="leading-tight">{step.name}</h3>
            </span>
          </li>
        ))}
      </ol>

      {form[currentStep - 1]}

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
          }}
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
}

export default Forms;
