import React from "react";

export default function FormTwo() {
  return (
    <div className="page-section container flex w-2/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">بخش دوم: نوع سازمان/شرکت خود را انتخاب کنید.</h2>
      <div className="row col-5">
        <form className="px-4" action="">
          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="bank"
              id="bank"
            />
            <label className="form-radio flex gap-2-label" htmlFor="bank">
              بانکی
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="gov"
              id="gov"
            />
            <label className="form-radio flex gap-2-label" htmlFor="gov">
              دولتی
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="it"
              id="it"
            />
            <label className="form-radio flex gap-2-label" htmlFor="it">
              فناوری اطلاعات
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="health"
              id="health"
            />
            <label className="form-radio flex gap-2-label" htmlFor="health">
              سلامت
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="insurance"
              id="insurance"
            />
            <label className="form-radio flex gap-2-label" htmlFor="insurance">
              بیمه
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="financial"
              id="financial"
            />
            <label className="form-radio flex gap-2-label" htmlFor="financial">
              مالی (غیر بانکی)
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="manu"
              id="manu"
            />
            <label className="form-radio flex gap-2-label" htmlFor="manu">
              ساخت و ساز
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="edu"
              id="edu"
            />
            <label className="form-radio flex gap-2-label" htmlFor="edu">
              آموزشی
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="retail"
              id="retail"
            />
            <label className="form-radio flex gap-2-label" htmlFor="retail">
              خرده فروشی
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="commodities"
              id="commodities"
            />
            <label
              className="form-radio flex gap-2-label"
              htmlFor="commodities"
            >
              فروش کالا
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="energy"
              id="energy"
            />
            <label className="form-radio flex gap-2-label" htmlFor="energy">
              نیرو و انرژی
            </label>
          </div>

          <div className="form-radio flex gap-2">
            <input
              className="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="other"
              id="other"
            />
            <label className="form-radio flex gap-2-label" htmlFor="other">
              سایر
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
