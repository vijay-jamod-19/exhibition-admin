import { VALIDATION } from "@/utils/Validation";
import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: VALIDATION.EMAIL_REQUIRED,
  password: VALIDATION.REQUIRED,
});
