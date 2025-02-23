import { InputControlledTypes } from "@/utils/Types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const InputControlled = ({
  label,
  name,
  placeholder,
  required,
  autofocus,
  readOnly,
  icon,
  maxLength,
  type,
  loading,
  handleClick,
  error,
  errorText,
}: InputControlledTypes) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
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
            <div className="input-group">
              <input
                type={type ? type : "text"}
                className="form-control border-end-0"
                placeholder={placeholder}
                readOnly={readOnly}
                maxLength={maxLength}
                {...field}
              />
              {icon && (
                <span className="input-group-text border-start-0">
                  <i className={icon} />
                </span>
              )}
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

export default InputControlled;
