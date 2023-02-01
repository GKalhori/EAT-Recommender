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
    full_name: "",
    phone: "",
  });

  const [warning, setWarning] = useState({
    full_name: false,
    phone: false,
  });

  function checkEmpty() {
    setWarning({
      full_name: false,
      phone: false,
    });

    if (registerValues.full_name === "")
      setWarning((prv) => ({
        ...prv,
        full_name: true,
      }));

    if (registerValues.phone === "")
      setWarning((prv) => ({
        ...prv,
        phone: true,
      }));

    if (registerValues.full_name !== "" && registerValues.phone !== "")
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

  async function sendCode() {
    setLoading(true);
    authServices
      .register({
        phone: registerValues.phone,
        full_name: registerValues.full_name,
      })
      .then((data) => {
        setLoading(false);
        if (data.status === 200) {
          localStorage.setItem("code_id", data.data.code_id);
          localStorage.setItem("verifyType", "register");
          navigate("/verify", { replace: true });
        } else {
          if (data.data === "exists")
            setAlert(() => {
              return {
                active: true,
                message: "شماره تلفن ثبت شده از قبل در سیستم وجود دارد!",
              };
            });
          else window.alert("ثبت نام شما با مشکل مواجه شده است!");
        }
      })
      .catch((err) => {
        return err;
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checkEmpty() && checkPhone()) sendCode();
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

      <form
        className="auth-card py-5 px-6 my-6 mx-auto w-80 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-lg mb-3">ثبت نام</h1>
          <input
            full_name="full_name"
            type="text"
            placeholder="نام و نام خانوادگی"
            value={registerValues.full_name}
            onChange={(event) =>
              setRegisterValues((prv) => {
                return {
                  ...prv,
                  full_name: event.target.value,
                };
              })
            }
            className={`w-full h-11 rounded-lg py-0 px-3 text-sm ${
              warning.full_name ? "border border-red-500" : ""
            }`}
          />
          <input
            full_name="phone"
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
    </>
  );
}
