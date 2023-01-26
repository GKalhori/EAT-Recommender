import React from "react";

export default function Form_4() {
  return (
    <div className="page-section container flex w-3/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">
        بخش آخر: فاکتورهای کلیدی که در خرید نرم افزار برای شما اهمیت دارد را
        انتخاب کنید.
      </h2>
      <div class="row col-5">
        <form class="px-4" action="">
          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="function"
              id="function"
            />
            <label class="form-check flex gap-2-label" for="function">
              عملکرد محصول
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="breadth"
              id="breadth"
            />
            <label class="form-check flex gap-2-label" for="breadth">
              وسعت خدمات
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="total_cost"
              id="total_cost"
            />
            <label class="form-check flex gap-2-label" for="total_cost">
              هزینه کلی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="powerfull_users"
              id="powerfull_users"
            />
            <label class="form-check flex gap-2-label" for="powerfull_users">
              جامعه کاربری قوی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="customer"
              id="customer"
            />
            <label class="form-check flex gap-2-label" for="customer">
              مشتری مداری قوی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="relation"
              id="relation"
            />
            <label class="form-check flex gap-2-label" for="relation">
              روابط از قبل موجود
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="road"
              id="road"
            />
            <label class="form-check flex gap-2-label" for="road">
              نقشه راه محصول و چشم انداز آینده
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="expert"
              id="expert"
            />
            <label class="form-check flex gap-2-label" for="expert">
              خدمات تخصصی قوی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="partnership"
              id="partnership"
            />
            <label class="form-check flex gap-2-label" for="partnership">
              مشارکت و مشاوره قوی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="focus"
              id="focus"
            />
            <label class="form-check flex gap-2-label" for="focus">
              تمرکز بر مشتری
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="factor"
              value="sustain"
              id="sustain"
            />
            <label class="form-check flex gap-2-label" for="sustain">
              دوام مالی/سازمانی
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
