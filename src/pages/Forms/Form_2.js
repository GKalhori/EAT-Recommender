import React from "react";

export default function Form_2() {
  return (
    <div className="page-section container flex w-2/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">بخش دوم: نوع سازمان/شرکت خود را انتخاب کنید.</h2>
      <div class="row col-5">
        <form class="px-4" action="">
          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="bank"
              id="bank"
            />
            <label class="form-radio flex gap-2-label" for="bank">
              بانکی
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="gov"
              id="gov"
            />
            <label class="form-radio flex gap-2-label" for="gov">
              دولتی
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="it"
              id="it"
            />
            <label class="form-radio flex gap-2-label" for="it">
              فناوری اطلاعات
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="health"
              id="health"
            />
            <label class="form-radio flex gap-2-label" for="health">
              سلامت
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="insurance"
              id="insurance"
            />
            <label class="form-radio flex gap-2-label" for="insurance">
              بیمه
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="financial"
              id="financial"
            />
            <label class="form-radio flex gap-2-label" for="financial">
              مالی (غیر بانکی)
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="manu"
              id="manu"
            />
            <label class="form-radio flex gap-2-label" for="manu">
              ساخت و ساز
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="edu"
              id="edu"
            />
            <label class="form-radio flex gap-2-label" for="edu">
              آموزشی
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="retail"
              id="retail"
            />
            <label class="form-radio flex gap-2-label" for="retail">
              خرده فروشی
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="commodities"
              id="commodities"
            />
            <label class="form-radio flex gap-2-label" for="commodities">
              فروش کالا
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="energy"
              id="energy"
            />
            <label class="form-radio flex gap-2-label" for="energy">
              نیرو و انرژی
            </label>
          </div>

          <div class="form-radio flex gap-2">
            <input
              class="form-radio flex gap-2-input"
              type="radio"
              name="org"
              value="other"
              id="other"
            />
            <label class="form-radio flex gap-2-label" for="other">
              سایر
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
