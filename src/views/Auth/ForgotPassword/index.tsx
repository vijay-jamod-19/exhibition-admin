import ImageWithBasePath from "@/components/core/common/imageWithBasePath";
import { all_routes } from "@/routes/all_routes";
import {
  FormProvider,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { ForgotPasswordTypes } from "./components/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "./components/Schema";
import FormHandler from "./components/FormHandler";
import CopyRightTag from "@/components/Global/CopyRightTag";

const ForgotPassword = () => {
  const formsContext = useForm<ForgotPasswordTypes, any>({
    resolver: yupResolver(ForgotPasswordSchema) as unknown as Resolver<
      ForgotPasswordTypes,
      any
    >,
    mode: "onBlur", // validate onBlur for initial validation
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmit: SubmitHandler<ForgotPasswordTypes> = async (
    values
  ) => {
    console.log({ values });
  };
  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-5">
            <div className="d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 bg-primary-transparent">
              <div>
                <ImageWithBasePath
                  src="assets/img/bg/authentication-bg-04.svg"
                  alt="Img"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
              <div className="col-md-7 mx-auto vh-100">
                <div className="vh-100">
                  <div className="vh-100 d-flex flex-column justify-content-between p-4 pb-0">
                    <div className=" mx-auto mb-5 text-center">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="">
                      <div className="text-center mb-3">
                        <h2 className="mb-2">Forgot Password?</h2>
                        <p className="mb-0">
                          If you forgot your password, well, then we'll email
                          you instructions to reset your password.
                        </p>
                      </div>
                      <FormProvider {...formsContext}>
                        <FormHandler
                          mode={"Submit"}
                          onSubmit={handleFormSubmit}
                          loading={false}
                        />
                      </FormProvider>
                      <div className="text-center">
                        <h6 className="fw-normal text-dark mb-0">
                          Return to
                          <Link to={all_routes.signin} className="hover-a">
                            Sign In
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="mt-5 pb-4 text-center">
                      <CopyRightTag />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
