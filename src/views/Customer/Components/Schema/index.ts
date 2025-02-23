import { VALIDATION } from "@/utils/Validation";
import * as Yup from "yup";

export const CustomerSchema = Yup.object().shape({
  first_name: VALIDATION.REQUIRED,
  last_name: VALIDATION.REQUIRED,
  mobile_number: VALIDATION.MOBILE_REQUIRED,
  email: VALIDATION.EMAIL_REQUIRED,
  profession: VALIDATION.REQUIRED,
  company_name: VALIDATION.REQUIRED,
  designation: VALIDATION.REQUIRED,
  password: VALIDATION.REQUIRED,
  password_confirmation: VALIDATION.REQUIRED.oneOf(
    [Yup.ref("password")],
    "Passwords do not match"
  ),
  address: Yup.object().shape({
    address_line_1: VALIDATION.REQUIRED,
    address_line_2: VALIDATION.REQUIRED,
    country: VALIDATION.REQUIRED,
    state: VALIDATION.REQUIRED,
    city: VALIDATION.REQUIRED,
    pincode: VALIDATION.REQUIRED,
  }),
});
