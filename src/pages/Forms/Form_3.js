import React from "react";

export default function Form_3() {
  return (
    <div className="page-section container flex w-3/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">بخش سوم:</h2>
      <div class="row col-5">
        <h4 class="fw-bold text-center mt-3"></h4>
        <form class="px-4" action="">
          <small class="fw-bold">(حداقل یک گزینه را انتخاب کنید)</small>
          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault">
              مخزن / متامدل
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault2"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault2">
              مدل سازی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault3">
              تجزیه و تحلیل و کمک به تصمیم گیری
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault3">
              قابلیت ارائه
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault3">
              قابلیت مدیریت
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault3">
              قابلیت پیکربندی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault3">
              چارچوب ها و استانداردها
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label class="form-check flex gap-2-label" for="flexCheckDefault3">
              قابلیت استفاده
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
