import React, { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import { general, factors, features } from "./data";
import recommenderServices from "../../api/recommenderServices";
import Stepper from "./Stepper";
import Buttons from "./Buttons";
import Result from "./Result";

function Forms() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
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

  function handleForm() {
    const userFeatues = [];

    formOneOptions.map((options) => {
      if (options.checked == true) userFeatues.push(options.id);
    });

    userFeatues.push(formTwoSelected);

    formThreeOptions.map((options) => {
      if (options.checked == true) userFeatues.push(options.id);
    });

    formFourOptions.map((options) => {
      if (options.checked == true) userFeatues.push(options.id);
    });

    recommenderServices
      .getRecommendation({ features: userFeatues })
      .then((data) => {
        setResult(data.data);
        setLoading(false);
        console.log(data.data);
      })
      .catch((err) => {
        return err;
      });
  }

  return (
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
  );
}

export default Forms;
