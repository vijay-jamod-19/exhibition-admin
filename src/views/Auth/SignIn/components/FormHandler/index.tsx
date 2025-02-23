import InputControlled from "@/components/Utils/Controlled/InputControlled";
import PasswordControlled from "@/components/Utils/Controlled/PasswordControlled";
import { all_routes } from "@/routes/all_routes";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

const FormHandler = ({ onSubmit, loading, mode }: any) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <InputControlled
          required
          label={"Email"}
          name={"email"}
          placeholder={"Enter email address"}
          icon={"ti ti-mail"}
        />
      </div>
      <div className="mb-3">
        <PasswordControlled
          required
          label={"Password"}
          name={"password"}
          placeholder={"Enter your password"}
        />
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <div className="form-check form-check-md mb-0">
            <input
              className="form-check-input"
              id="remember_me"
              type="checkbox"
            />
            <label htmlFor="remember_me" className="form-check-label mt-0">
              Remember Me
            </label>
          </div>
        </div>
        <div className="text-end">
          <Link to={all_routes.forgotPassword} className="link-danger">
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          className={`btn btn-primary w-100 ${loading && "disabled"}`}
        >
          {loading && <i className="fas fa-spinner fa-spin me-2" />}
          {mode}
        </button>
      </div>
    </form>
  );
};

export default FormHandler;
