import React from "react";

export default function Form_1() {
  return (
    <div className="page-section container flex w-3/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">
        بخش اول: ویژگی های عمومی که از یک نرم افزار مدیریت پروژه های معماری
        سازمانی انتظار دارید را انتخاب کنید.
      </h2>
      <div class="row col-5">
        <form class="px-4" action="">
          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="repo_meta"
              id="repo_meta"
            />
            <label class="form-check flex gap-2-label" for="repo_meta">
              مخزن / متامدل
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="model"
              id="model"
            />
            <label class="form-check flex gap-2-label" for="model">
              مدل سازی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="decision"
              id="decision"
            />
            <label class="form-check flex gap-2-label" for="decision">
              تجزیه و تحلیل و کمک به تصمیم گیری
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="present"
              id="present"
            />
            <label class="form-check flex gap-2-label" for="present">
              قابلیت ارائه
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="admin"
              id="admin"
            />
            <label class="form-check flex gap-2-label" for="admin">
              قابلیت مدیریت
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="config"
              id="config"
            />
            <label class="form-check flex gap-2-label" for="config">
              قابلیت پیکربندی
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="std"
              id="std"
            />
            <label class="form-check flex gap-2-label" for="std">
              برخورداری از چارچوب ها و استانداردها
            </label>
          </div>

          <div class="form-check flex gap-2">
            <input
              class="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="use"
              id="use"
            />
            <label class="form-check flex gap-2-label" for="use">
              قابلیت استفاده
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
