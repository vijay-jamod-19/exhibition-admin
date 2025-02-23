import InputControlled from "@/components/Utils/Controlled/InputControlled";
import { useFormContext } from "react-hook-form";

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
