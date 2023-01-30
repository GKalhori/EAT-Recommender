import React from "react";
import { steps } from "../../static/formsData";

export default function Stepper({ currentStep }) {
  return (
    <ol className="flex flex-row items-center justify-center gap-3 sm:flex sm:space-x-8 sm:space-y-0">
      {steps.map((step) => (
        <li
          key={step.id}
          className={`flex flex-col w-36 items-center font-semibold gap-2 ${
            currentStep === step.id ? "text-sky-800" : "text-gray-500"
          }`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border text-white rounded-full shrink-0 ${
              currentStep === step.id
                ? "border-sky-800 bg-sky-800"
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
  );
}
