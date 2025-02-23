import { VALIDATION } from "@/utils/Validation";
import * as Yup from "yup";

export const ForgotPasswordSchema = Yup.object().shape({
  email: VALIDATION.EMAIL_REQUIRED,
});
