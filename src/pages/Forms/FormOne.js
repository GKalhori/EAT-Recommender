import React from "react";

export default function FormOne() {
  return (
    <div className="page-section container flex w-3/5 items-center flex-col mx-auto my-5 p-5 border-2 border-solid border-gray-500 border-opacity-30 rounded-md">
      <h2 className="h3 m-2">
        بخش اول: ویژگی های عمومی که از یک نرم افزار مدیریت پروژه های معماری
        سازمانی انتظار دارید را انتخاب کنید.
      </h2>
      <div className="row col-5">
        <form className="px-4" action="">
          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="repo_meta"
              id="repo_meta"
            />
            <label className="form-check flex gap-2-label" htmlFor="repo_meta">
              مخزن / متامدل
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="model"
              id="model"
            />
            <label className="form-check flex gap-2-label" htmlFor="model">
              مدل سازی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="decision"
              id="decision"
            />
            <label className="form-check flex gap-2-label" htmlFor="decision">
              تجزیه و تحلیل و کمک به تصمیم گیری
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="present"
              id="present"
            />
            <label className="form-check flex gap-2-label" htmlFor="present">
              قابلیت ارائه
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="admin"
              id="admin"
            />
            <label className="form-check flex gap-2-label" htmlFor="admin">
              قابلیت مدیریت
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="config"
              id="config"
            />
            <label className="form-check flex gap-2-label" htmlFor="config">
              قابلیت پیکربندی
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="std"
              id="std"
            />
            <label className="form-check flex gap-2-label" htmlFor="std">
              برخورداری از چارچوب ها و استانداردها
            </label>
          </div>

          <div className="form-check flex gap-2">
            <input
              className="form-check flex gap-2-input"
              type="checkbox"
              name="general"
              value="use"
              id="use"
            />
            <label className="form-check flex gap-2-label" htmlFor="use">
              قابلیت استفاده
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
