import { InputControlledTypes, PasswordControlledTypes } from "@/utils/Types";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type PasswordField = "password";

const PasswordControlled = ({
  label,
  name,
  placeholder,
  required,
  icon,
  maxLength,
  loading,
  error,
  errorText,
}: PasswordControlledTypes) => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <React.Fragment>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <React.Fragment>
            <div className="pass-group">
              <input
                type={passwordVisibility.password ? "text" : "password"}
                className="pass-input form-control"
                placeholder={placeholder}
                {...field}
              />
              <span
                className={`ti toggle-passwords ${
                  passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                }`}
                onClick={() => togglePasswordVisibility("password")}
              ></span>
            </div>
            {error || errors[name] ? (
              <span className="text-danger">
                <small>{errorText || errors[name]?.message}</small>
              </span>
            ) : null}
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};

export default PasswordControlled;
