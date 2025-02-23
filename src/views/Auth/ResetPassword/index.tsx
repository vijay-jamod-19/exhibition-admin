import ImageWithBasePath from "@/components/core/common/imageWithBasePath";
import React, { useState } from "react";
import {
  FormProvider,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ResetPasswordTypes } from "./components/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "./components/Schema";
import CopyRightTag from "@/components/Global/CopyRightTag";
import FormHandler from "./components/FormHandler";

const ResetPassword = () => {
  const formsContext = useForm<ResetPasswordTypes, any>({
    resolver: yupResolver(ResetPasswordSchema) as unknown as Resolver<
      ResetPasswordTypes,
      any
    >,
    mode: "onBlur", // validate onBlur for initial validation
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const handleFormSubmit: SubmitHandler<ResetPasswordTypes> = async (
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
                  src="assets/img/bg/authentication-bg-06.svg"
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
                        <h2 className="mb-2">Reset Password</h2>
                        <p className="mb-0">
                          Your new password must be different from previous used
                          passwords.
                        </p>
                      </div>
                      {/*  */}
                      <FormProvider {...formsContext}>
                        <FormHandler
                          mode={"Submit"}
                          onSubmit={handleFormSubmit}
                          loading={false}
                        />
                      </FormProvider>
                      {/*  */}
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

export default ResetPassword;
