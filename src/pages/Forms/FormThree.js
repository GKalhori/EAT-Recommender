import React from "react";

export default function FormThree() {
  return (
    <div className="page-section container flex w-3/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">بخش سوم:</h2>
      <div className="row col-5">
        <form className="px-4" action="">
          <small className="fw-bold">(حداقل یک گزینه را انتخاب کنید)</small>
          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault"
            >
              مخزن / متامدل
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault2"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault2"
            >
              مدل سازی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault3"
            >
              تجزیه و تحلیل و کمک به تصمیم گیری
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault3"
            >
              قابلیت ارائه
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault3"
            >
              قابلیت مدیریت
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault3"
            >
              قابلیت پیکربندی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault3"
            >
              چارچوب ها و استانداردها
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="flexCheckDefault3"
            >
              قابلیت استفاده
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
