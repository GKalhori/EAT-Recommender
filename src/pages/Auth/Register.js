import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../api/authServices";
import "../../App.css";

export default function Register() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    active: false,
    message: "",
  });

  const [registerValues, setRegisterValues] = useState({
    name: "",
    phone: "",
    password: "",
    visibility: false,
  });

  const [warning, setWarning] = useState({
    name: false,
    phone: false,
    password: false,
  });

  function checkEmpty() {
    setWarning({
      name: false,
      phone: false,
      password: false,
    });

    if (registerValues.name === "")
      setWarning((prv) => ({
        ...prv,
        name: true,
      }));

    if (registerValues.phone === "")
      setWarning((prv) => ({
        ...prv,
        phone: true,
      }));

    if (registerValues.password === "")
      setWarning((prv) => ({
        ...prv,
        password: true,
      }));

    if (
      registerValues.name !== "" &&
      registerValues.phone !== "" &&
      registerValues.password !== ""
    )
      return true;
    else return false;
  }

  function checkPhone() {
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    var result = regex.test(registerValues.phone);
    if (result) return true;
    else {
      setAlert(() => {
        return {
          active: true,
          message: "شماره تلفن همراه به درستی وارد نشده است",
        };
      });
      return false;
    }
  }

  function checkPassword() {
    var regex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    var result = regex.test(registerValues.password);
    if (result) return true;
    else {
      setAlert(() => {
        return {
          active: true,
          message:
            "رمز عبور باید 6 الی 12 رقم، شامل حروف انگلیسی و اعداد باشد!",
        };
      });
      return false;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checkEmpty() && checkPhone() && checkPassword()) registration();
  }

  async function registration() {
    setLoading(true);
    authServices
      .register({
        phone: registerValues.phone,
        password: registerValues.password,
      })
      .then((data) => {
        setLoading(false);
        if (data.status === 200) {
          window.alert("ثبت نام شما با موفقیت انجام شد");
          navigate("/login", { replace: true });
        } else {
          if (data.data === "exists")
            window.alert("شماره تلفن ثبت شده از قبل در سیستم وجود دارد!");
          else window.alert("ثبت نام شما با مشکل مواجه شده است!");
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
          className="bg-yellow-200 p-3 rounded-lg text-yellow-800 bottom-16 right-10 z-10"
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
            <h1 className="text-center text-lg mb-3">ثبت نام</h1>
            <input
              name="name"
              type="text"
              placeholder="نام و نام خانوادگی"
              value={registerValues.name}
              onChange={(event) =>
                setRegisterValues((prv) => {
                  return {
                    ...prv,
                    name: event.target.value,
                  };
                })
              }
              className={`w-full h-11 rounded-lg py-0 px-3 text-sm ${
                warning.name ? "border border-red-500" : ""
              }`}
            />
            <input
              name="phone"
              type="text"
              placeholder="شماره تلفن همراه"
              value={registerValues.phone}
              onChange={(event) =>
                setRegisterValues((prv) => {
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
              type={registerValues.visibility ? "text" : "password"}
              placeholder="رمز عبور"
              value={registerValues.password}
              onChange={(event) =>
                setRegisterValues((prv) => {
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
                  setRegisterValues((prv) => {
                    return {
                      ...prv,
                      visibility: !registerValues.visibility,
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
              <span> ایجاد حساب</span>
              <span className={loading ? "loader" : ""}></span>
            </button>
            <small className="block text-center">
              قبلا عضو شده اید؟{" "}
              <Link className="text-slate-700 hover:text-sky-900" to="/login">
                ورود به سامانه
              </Link>
            </small>
          </div>
        </form>
      </div>
    </>
  );
}
