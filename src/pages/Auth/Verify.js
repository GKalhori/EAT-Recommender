import React, { useState, useEffect } from "react";
import authServices from "../../api/authServices";
import "../../App.css";

export default function Verify() {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [warning, setWarning] = useState(false);
  const [alert, setAlert] = useState({
    active: false,
    message: "",
  });

  function checkEmpty() {
    setWarning(false);
    if (otp === "") setWarning(true);

    if (otp !== "") return true;
    else return false;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checkEmpty()) login();
  }

  async function login() {
    setLoading(true);
    authServices
      .verify({
        code_id: localStorage.getItem("code_id"),
        code: otp,
      })
      .then((data) => {
        setLoading(false);
        if (data.status === 200) {
          localStorage.setItem("token", data.data);
          if (localStorage.getItem("verifyType") === "register")
            window.alert("ثبت نام شما با موفقیت انجام شد");
          else if (localStorage.getItem("verifyType") === "login")
            window.alert("ورود شما با موفقیت انجام شد");
          window.location = "/";
        } else {
          if (data.data === "wrong code")
            setAlert(() => {
              return {
                active: true,
                message: "کد وارد شده اشتباه است!",
              };
            });
          else window.alert("ورود شما با مشکل مواجه شده است!");
        }
      })
      .catch((err) => {
        return err;
      });
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      setAlert(() => {
        return {
          message: "",
          active: false,
        };
      });
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, [alert]);

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
        className="auth-card py-5 px-6 my-16 mx-auto rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-lg">احراز هویت</h1>
          <input
            name="otp"
            type="text"
            placeholder="کد پیامک شده"
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
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
            <span>وارد شوید</span>
            <span className={loading ? "loader" : ""}></span>
          </button>
        </div>
      </form>
    </>
  );
}
