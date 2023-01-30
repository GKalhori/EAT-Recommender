import React, { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import { general, factors, features } from "../../static/formsData";
import recommenderServices from "../../api/recommenderServices";
import Stepper from "./Stepper";
import Buttons from "./Buttons";
import Result from "./Result";
import { NavLink } from "react-router-dom";

export default function Questionnaire() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [formOneOptions, setFormOneOptions] = useState(general);
  const [formTwoSelected, setFormTwoSelected] = useState([]);
  const [formThreeOptions, setFormThreeOptions] = useState(features);
  const [formFourOptions, setFormFourOptions] = useState(factors);

  const form = [
    <FormOne options={formOneOptions} setOptions={setFormOneOptions} />,
    <FormTwo selected={formTwoSelected} setSelected={setFormTwoSelected} />,
    <FormThree options={formThreeOptions} setOptions={setFormThreeOptions} />,
    <FormFour options={formFourOptions} setOptions={setFormFourOptions} />,
  ];

  function handleForm() {
    const userFeatues = [];

    formOneOptions.forEach((options) => {
      if (options.checked === true && options.id !== "null")
        userFeatues.push(options.id);
    });

    if (formTwoSelected.length !== 0) userFeatues.push(formTwoSelected);

    formThreeOptions.forEach((options) => {
      if (options.checked === true && options.id !== "null")
        userFeatues.push(options.id);
    });

    formFourOptions.forEach((options) => {
      if (options.checked === true && options.id !== "null")
        userFeatues.push(options.id);
    });

    recommenderServices
      .getRecommendation({ features: userFeatues })
      .then((data) => {
        setResult(data.data);
        setLoading(false);
      })
      .catch((err) => {
        return err;
      });
  }

  return (
    <>
      {localStorage.getItem("token") !== "undefined" ? (
        <div className="my-4">
          {loading ? (
            <>
              <Stepper currentStep={currentStep} />
              {form[currentStep - 1]}
              <Buttons
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                handleForm={handleForm}
              />
            </>
          ) : (
            <Result toolName={result} />
          )}
        </div>
      ) : (
        <div className=" h-96 flex justify-center items-center">
          <div className="p-10 bg-slate-200 rounded-lg">
            برای استفاده از خدمات سیستم توصیه گر، باید در سایت
            <NavLink
              to={"/register"}
              className="text-blue-600 hover:text-blue-900"
            >
              {" "}
              ثبت نام{" "}
            </NavLink>
            کرده و
            <NavLink
              to={"/login"}
              className="text-blue-600 hover:text-blue-900"
            >
              {" "}
              وارد{" "}
            </NavLink>
            شوید.
          </div>
        </div>
      )}
    </>
  );
}
