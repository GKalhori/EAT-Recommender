import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import authServices from "../../api/authServices";
import "../../App.css";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    active: false,
    message: "",
  });

  const [loginValues, setLoginValues] = useState({
    phone: "",
    password: "",
    visibility: false,
  });

  const [warning, setWarning] = useState({
    phone: false,
    password: false,
  });

  function checkEmpty() {
    setWarning({
      phone: false,
      password: false,
    });

    if (loginValues.phone === "")
      setWarning((prv) => ({
        ...prv,
        phone: true,
      }));

    if (loginValues.password === "")
      setWarning((prv) => ({
        ...prv,
        password: true,
      }));

    if (loginValues.phone !== "" && loginValues.password !== "") return true;
    else return false;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checkEmpty()) login();
  }

  async function login() {
    setLoading(true);
    authServices
      .login({
        phone: loginValues.phone,
        password: loginValues.password,
      })
      .then((data) => {
        setLoading(false);
        if (data.status === 200) {
          localStorage.setItem("token", data.data);
          window.alert("ورود شما با موفقیت انجام شد");
          window.location = "/";
        } else {
          if (data.data === "not found")
            setAlert(() => {
              return {
                active: true,
                message: "نام کاربری در سیستم وجود ندارد!",
              };
            });
          else if (data.data === "wrong password")
            setAlert(() => {
              return {
                active: true,
                message: "رمز عبور اشتباه است!",
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
      <div className="auth-card py-5 px-6 my-5 mx-auto w-80 rounded-lg">
        <form
          className="relative flex flex-col h-full justify-between"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-lg mb-3">ورود</h1>
            <input
              name="phone"
              type="text"
              placeholder="نام کاربری"
              value={loginValues.phone}
              onChange={(event) =>
                setLoginValues((prv) => {
                  return {
                    ...prv,
                    phone: event.target.value,
                  };
                })
              }
              className={`w-full h-11 rounded-lg py-0 px-3 text-sm ${
                warning.phone ? "border border-red-500" : ""
              }`}
            />

            <input
              name="password"
              type={loginValues.visibility ? "text" : "password"}
              placeholder="رمز عبور"
              value={loginValues.password}
              onChange={(event) =>
                setLoginValues((prv) => {
                  return {
                    ...prv,
                    password: event.target.value,
                  };
                })
              }
              className={`w-full h-11 rounded-lg py-0 px-3 text-sm ${
                warning.password ? "border border-red-500" : ""
              }`}
            />
            <div className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                id="showPassword"
                onChange={() =>
                  setLoginValues((prv) => {
                    return {
                      ...prv,
                      visibility: !loginValues.visibility,
                    };
                  })
                }
              />
              <label htmlFor="showPassword">نمایش رمز عبور</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="flex flex-row items-center justify-center gap-1 w-full py-3 cursor-pointer text-white text-sm rounded-lg bg-slate-700 hover:bg-sky-900"
              type="submit"
            >
              <span>وارد شوید</span>
              <span className={loading ? "loader" : ""}></span>
            </button>
            <small className="block text-center">
              در سامانه عضو نیستید؟{" "}
              <Link
                className="text-slate-700 hover:text-sky-900"
                to="/register"
              >
                ثبت نام کنید
              </Link>
            </small>
          </div>
        </form>
      </div>
    </>
  );
}
