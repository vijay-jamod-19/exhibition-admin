import SubmitButton from "@/components/Shared/SubmitButton";
import InputControlled from "@/components/Utils/Controlled/InputControlled";
import PasswordControlled from "@/components/Utils/Controlled/PasswordControlled";
import { useFormContext } from "react-hook-form";
import Select from "react-select";
import { CustomerTypes } from "../Types";

const bloodgroup = [
  { value: "Select", label: "Select" },
  { value: "A+", label: "A+" },
  { value: "O+", label: "O+" },
  { value: "B+", label: "B+" },
  { value: "AB+", label: "AB+" },
];
const statelist = [
  { value: "Select State", label: "Select State" },
  { value: "California", label: "California" },
  { value: "Texas", label: "Texas" },
  { value: "Florida", label: "Florida" },
];
const countrylist = [
  { value: "Select Country", label: "Select Country" },
  { value: "USA", label: "USA" },
  { value: "France", label: "France" },
  { value: "India", label: "India" },
  { value: "Spain", label: "Spain" },
];

const FormHandler = ({ onSubmit, loading, mode }: any) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<CustomerTypes>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Personal Information */}
      <div className="row">
        <div className="col-md-12">
          <h6 className="text-muted mb-2">Personal Information</h6>
        </div>
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"First Name"}
            name={"first_name"}
            placeholder={"Enter first name"}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Last Name"}
            name={"last_name"}
            placeholder={"Enter last name"}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            // type={"number"}
            required
            label={"Mobile"}
            name={"mobile_number"}
            placeholder={"Enter mobile number"}
            icon={"fas fa-mobile-screen"}
            maxLength={10}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Email"}
            name={"email"}
            placeholder={"Enter email address"}
            icon={"ti ti-mail"}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Profession"}
            name={"profession"}
            placeholder={"Enter profession"}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Company Name"}
            name={"company_name"}
            placeholder={"Enter company name"}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Designation"}
            name={"designation"}
            placeholder={"Enter designation"}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <PasswordControlled
            required
            label={"Password"}
            name={"password"}
            placeholder={"Enter your password"}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <PasswordControlled
            required
            label={"Confirm Password"}
            name={"password_confirmation"}
            placeholder={"Enter your Confirm password"}
          />
        </div>
        {/*  */}
      </div>
      {/* Address Information */}
      <div className="row">
        <div className="col-md-12">
          <h6 className="text-muted mb-2">Address Information</h6>
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Address Line 1"}
            name={"address.address_line_1"}
            placeholder={"Enter address line 1"}
            error={errors?.address?.address_line_1}
            errorText={errors?.address?.address_line_1?.message}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Address Line 2"}
            name={"address.address_line_2"}
            placeholder={"Enter address line 2"}
            error={errors?.address?.address_line_2}
            errorText={errors?.address?.address_line_2?.message}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Country"}
            name={"address.country"}
            placeholder={"Enter country"}
            error={errors?.address?.country}
            errorText={errors?.address?.country?.message}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"State"}
            name={"address.state"}
            placeholder={"Enter state"}
            error={errors?.address?.state}
            errorText={errors?.address?.state?.message}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"City"}
            name={"address.city"}
            placeholder={"Enter city"}
            error={errors?.address?.city}
            errorText={errors?.address?.city?.message}
          />
        </div>
        {/*  */}
        <div className="col-md-4 mb-3">
          <InputControlled
            required
            label={"Postal Code"}
            name={"address.postcode"}
            placeholder={"Enter postal code"}
            maxLength={6}
            error={errors?.address?.pincode}
            errorText={errors?.address?.pincode?.message}
          />
        </div>
        {/*  */}
      </div>
      <div className="text-end">
        <SubmitButton mode={mode} loading={loading} />
      </div>
    </form>
  );
};

export default FormHandler;
