import { VALIDATION } from "@/utils/Validation";
import * as Yup from "yup";

export const ResetPasswordSchema = Yup.object().shape({
  password: VALIDATION.REQUIRED,
  password_confirmation: VALIDATION.REQUIRED.oneOf(
    [Yup.ref("password")],
    "Passwords do not match"
  ),
});
