import InputControlled from "@/components/Utils/Controlled/InputControlled";
import PasswordControlled from "@/components/Utils/Controlled/PasswordControlled";
import { all_routes } from "@/routes/all_routes";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import { ResetPasswordTypes } from "../Types";

const FormHandler = ({ onSubmit, loading, mode }: any) => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const [password, setPassword] = useState("");
  const [passwordResponce, setPasswordResponce] = useState({
    passwordResponceText:
      "Use 8 or more characters with a mix of letters, numbers, and symbols.",
    passwordResponceKey: "",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext<ResetPasswordTypes>();

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const onChangePassword = (password: string) => {
    setPassword(password);
    if (password.match(/^$|\s+/)) {
      setPasswordResponce({
        passwordResponceText:
          "Use 8 or more characters with a mix of letters, numbers & symbols",
        passwordResponceKey: "",
      });
    } else if (password.length === 0) {
      setPasswordResponce({
        passwordResponceText: "",
        passwordResponceKey: "",
      });
    } else if (password.length < 8) {
      setPasswordResponce({
        passwordResponceText: "Weak. Must contain at least 8 characters",
        passwordResponceKey: "0",
      });
    } else if (
      password.search(/[a-z]/) < 0 ||
      password.search(/[A-Z]/) < 0 ||
      password.search(/[0-9]/) < 0
    ) {
      setPasswordResponce({
        passwordResponceText:
          "Average. Must contain at least 1 upper case and number",
        passwordResponceKey: "1",
      });
    } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      setPasswordResponce({
        passwordResponceText: "Almost. Must contain a special symbol",
        passwordResponceKey: "2",
      });
    } else {
      setPasswordResponce({
        passwordResponceText: "Awesome! You have a secure password.",
        passwordResponceKey: "3",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-block mb-3">
        <div className="mb-3">
          <label className="form-label">
            Password<span className="text-danger"> *</span>
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <div className="pass-group" id="passwordInput">
                  <input
                    type={passwordVisibility.password ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      onChangePassword(e.target.value);
                      onChange(e.target.value);
                    }}
                    className="form-control pass-input"
                    placeholder="Enter your password"
                  />
                  <span
                    className={`ti toggle-passwords ${
                      passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                    }`}
                    onClick={() => togglePasswordVisibility("password")}
                    style={{ cursor: "pointer" }}
                  ></span>
                </div>
                {errors["password"] ? (
                  <span className="text-danger">
                    <small>{errors["password"]?.message}</small>
                  </span>
                ) : null}
              </>
            )}
          />
        </div>
        <div
          className={`password-strength d-flex ${
            passwordResponce.passwordResponceKey === "0"
              ? "poor-active"
              : passwordResponce.passwordResponceKey === "1"
              ? "avg-active"
              : passwordResponce.passwordResponceKey === "2"
              ? "strong-active"
              : passwordResponce.passwordResponceKey === "3"
              ? "heavy-active"
              : ""
          }`}
          id="passwordStrength"
        >
          <span id="poor" className="active" />
          <span id="weak" className="active" />
          <span id="strong" className="active" />
          <span id="heavy" className="active" />
        </div>
      </div>
      <p className="fs-12">{passwordResponce.passwordResponceText}</p>
      <div className="mb-3">
        <PasswordControlled
          required
          label={"Confirm Password"}
          name={"password_confirmation"}
          placeholder={"Enter your confirm password"}
        />
      </div>
      <div className="mb-3">
        <button
          type="submit"
          // onClick={navigationPath}
          className="btn btn-primary w-100"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormHandler;
