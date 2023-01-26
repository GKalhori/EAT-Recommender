import React from "react";

export default function FormFour() {
  return (
    <div className="page-section container flex w-3/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">
        بخش آخر: فاکتورهای کلیدی که در خرید نرم افزار برای شما اهمیت دارد را
        انتخاب کنید.
      </h2>
      <div className="row col-5">
        <form className="px-4" action="">
          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="function"
              id="function"
            />
            <label className="form-check flex gap-2-label" htmlFor="function">
              عملکرد محصول
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="breadth"
              id="breadth"
            />
            <label className="form-check flex gap-2-label" htmlFor="breadth">
              وسعت خدمات
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="total_cost"
              id="total_cost"
            />
            <label className="form-check flex gap-2-label" htmlFor="total_cost">
              هزینه کلی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="powerfull_users"
              id="powerfull_users"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="powerfull_users"
            >
              جامعه کاربری قوی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="customer"
              id="customer"
            />
            <label className="form-check flex gap-2-label" htmlFor="customer">
              مشتری مداری قوی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="relation"
              id="relation"
            />
            <label className="form-check flex gap-2-label" htmlFor="relation">
              روابط از قبل موجود
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="road"
              id="road"
            />
            <label className="form-check flex gap-2-label" htmlFor="road">
              نقشه راه محصول و چشم انداز آینده
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="expert"
              id="expert"
            />
            <label className="form-check flex gap-2-label" htmlFor="expert">
              خدمات تخصصی قوی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="partnership"
              id="partnership"
            />
            <label
              className="form-check flex gap-2-label"
              htmlFor="partnership"
            >
              مشارکت و مشاوره قوی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="focus"
              id="focus"
            />
            <label className="form-check flex gap-2-label" htmlFor="focus">
              تمرکز بر مشتری
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="sustain"
              id="sustain"
            />
            <label className="form-check flex gap-2-label" htmlFor="sustain">
              دوام مالی/سازمانی
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
