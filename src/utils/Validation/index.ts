import * as Yup from "yup";

export const MOBILE_PATTERN = new RegExp("^[6-9][0-9]{9}$");
export const EMAIL_PATTERN = new RegExp(
  "(^$|^[a-z0-9+_.-]+@[a-z0-9.-]+\\.[a-z]+$)"
);
export const PINCODE_PATTERN = new RegExp("^[0-9]{6}$");

export const PAN_PATTERN = /^([A-Z]{5}[0-9]{4}[A-Z]){0,11}$/;
export const GSTIN_PATTERN =
  /^([0-9]{2}[a-zA-Z]{4}([a-zA-Z]{1}|[0-9]{1})[0-9]{4}[a-zA-Z]{1}([a-zA-Z]|[0-9]){3}){0,15}$/;

export const LANDLINE_PATTERN = new RegExp("^[0-9]*$");

export const NOT_SPECIAL_CHAR_PATTERN = new RegExp("^[a-zA-Z0-9 s]*$");
export const ALPHABETIC_PATTERN = new RegExp("^[a-zA-Z s]*$");
export const ONLY_NUMERIC_PATTERN = new RegExp("^[0-9.s]*$");

export const MESSAGE = {
  REQUIRED: "This Field is Required.",
  MOBILE_VALID: "Please enter a valid mobile number.",
  EMAIL_VALID: "Please enter a valid email address.",
  PAN_VALID: "Must be a Valid & Capitalized PAN Number.",
  GSTIN_VALID: "Must be a Valid GST Number.",
  PINCODE_VALID: "Please enter a valid pin code or zip code.",
  NOT_SPECIAL_CHARACTER: "Special characters are not allowed.",
  ALPHABETIC: "Only alphabets are allowed.",
  NUMERIC: "Only numbers are allowed.",
  DATE_VALID: "Please enter a valid date.",
  PAST_DATE_VALID: "Select present or future date & time.",
};

// =============== Validations * ====================

const REQUIRED = Yup.string().required(MESSAGE.REQUIRED);

const STRING = Yup.string().typeError(MESSAGE.ALPHABETIC).nullable();
const STRING_REQUIRED = Yup.string()
  .required(MESSAGE.REQUIRED)
  .typeError(MESSAGE.ALPHABETIC);

const NUMBER = Yup.number().typeError(MESSAGE.NUMERIC).nullable();
const NUMBER_REQUIRED = Yup.number()
  .required(MESSAGE.REQUIRED)
  .typeError(MESSAGE.NUMERIC);

const MOBILE_REQUIRED = Yup.string()
  .required(MESSAGE.REQUIRED)
  .matches(MOBILE_PATTERN, MESSAGE.MOBILE_VALID);

const LANDLINE_REQUIRED = Yup.string()
  .required(MESSAGE.REQUIRED)
  .matches(LANDLINE_PATTERN, MESSAGE.MOBILE_VALID);

const EMAIL_REQUIRED = Yup.string()
  .required(MESSAGE.REQUIRED)
  .email(MESSAGE.EMAIL_VALID)
  .matches(EMAIL_PATTERN, MESSAGE.EMAIL_VALID);

const PINCODE_REQUIRED = Yup.string()
  .required(MESSAGE.REQUIRED)
  .test(
    "is-empty-or-valid",
    "Must be 6 numeric digits",
    (value) => !value || value.length === 6
  )
  .matches(/^[0-9\s]*$/, "Only allowed Numeric");

const GSTIN_REQUIRED = Yup.string()
  .required(MESSAGE.REQUIRED)
  .max(15, "Too Long, maximum 15 Character.")
  .matches(PINCODE_PATTERN, MESSAGE.PINCODE_VALID);

const PAN_REQUIRED = Yup.string()
  .required(MESSAGE.REQUIRED)
  .max(11, "Too Long, maximum 11 Character.")
  .matches(PAN_PATTERN, MESSAGE.PAN_VALID);

const MOBILE = Yup.string()
  .test("isValidMobileNumber", MESSAGE?.MOBILE_VALID, (value) => {
    if (value) {
      return /^[0-9]{10}$/.test(value);
    }
    return true;
  })
  .nullable();

const EMAIL = Yup.string()
  .matches(EMAIL_PATTERN, MESSAGE.EMAIL_VALID)
  .nullable();
const PAN = Yup.string()
  .max(11, "Too Long, maximum 11 Character.")
  .matches(PAN_PATTERN, MESSAGE.PAN_VALID)
  .nullable();
const GSTIN = Yup.string()
  .max(15, "Too Long, maximum 15 Character.")
  .matches(GSTIN_PATTERN, MESSAGE.GSTIN_VALID)
  .nullable();
const PINCODE = Yup.string()
  .test(
    "is-empty-or-valid",
    "Must be 6 numeric digits",
    (value) => !value || value.length === 6
  )
  .matches(/^[0-9\s]*$/, "Only allowed Numeric")
  .nullable();

const RequiredStringFunction = (field: string) => {
  return Yup.string().required(`${field} is Required.`);
};
const RequiredNumberFunction = (field: string) => {
  return Yup.number()
    .typeError("Enter a valid number")
    .required(`${field} is Required.`);
};

export const ImageValidation = Yup.mixed()
  .required("You need to provide a file.")
  .test("fileSize", "File size too large, max file size is 1 Mb", (file: any) =>
    file ? file.size <= 1024 * 1024 * 2 : true
  )
  .test(
    "fileType",
    "Only accepted formats are: .jpeg, .jpg, .bmp, .pdf and .doc",
    (file: any) =>
      file
        ? [
            "image/png",
            "image/jpg",
            "image/jpeg",
            "application/pdf",
            "application/msword",
          ].includes(file.type)
        : true
  );

export const VALIDATION = {
  STRING,
  STRING_REQUIRED,
  NUMBER,
  NUMBER_REQUIRED,
  REQUIRED_STRING: RequiredStringFunction,
  REQUIRED_NUMBER: RequiredNumberFunction,
  REQUIRED,
  MOBILE_REQUIRED,
  MOBILE,
  LANDLINE_REQUIRED,
  EMAIL_REQUIRED,
  EMAIL,
  GSTIN_REQUIRED,
  GSTIN,
  PAN_REQUIRED,
  PAN,
  PINCODE_REQUIRED,
  PINCODE,
};
