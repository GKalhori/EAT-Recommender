import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../api/authServices";
import "../../App.css";
import { Navigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState({
    active: false,
    message: "",
  });

  function checkEmpty() {
    setWarning(false);
    if (phone === "") setWarning(true);
    if (phone !== "") return true;
    else return false;
  }

  async function sendCode() {
    setLoading(true);
    authServices
      .login({
        phone: phone,
      })
      .then((data) => {
        setLoading(false);
        if (data.status === 200) {
          localStorage.setItem("code_id", data.data.code_id);
          localStorage.setItem("verifyType", "login");
          navigate("/verify", { replace: true });
        } else {
          if (data.data === "not found")
            setAlert(() => {
              return {
                active: true,
                message: "شماره تلفن وارد شده در سیستم وجود ندارد!",
              };
            });
        }
      })
      .catch((err) => {
        return err;
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checkEmpty()) sendCode();
  }

  return (
    <>
      {alert.active ? (
        <div
          className="bg-red-200 p-3 rounded-lg text-red-800 bottom-16 right-10 z-10"
          style={{ position: "fixed" }}
        >
          {alert.message}
        </div>
      ) : (
        <></>
      )}
      <form
        className="auth-card py-5 px-6 my-14 mx-auto rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-lg">ورود</h1>
          <input
            name="phone"
            type="text"
            placeholder="شماره تلفن همراه"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={`w-full h-11 rounded-lg py-0 px-3 text-sm ${
              warning ? "border border-red-500" : ""
            }`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="flex flex-row items-center justify-center gap-1 w-full py-3 cursor-pointer text-white text-sm rounded-lg bg-slate-700 hover:bg-sky-900"
            type="submit"
          >
            <span>دریافت کد</span>
            <span className={loading ? "loader" : ""}></span>
          </button>
          <small className="block text-center">
            در سامانه عضو نیستید؟{" "}
            <Link className="text-slate-700 hover:text-sky-900" to="/register">
              ثبت نام کنید
            </Link>
          </small>
        </div>
      </form>
    </>
  );
}
