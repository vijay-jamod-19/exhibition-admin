import PageLayout from "@/components/Global/PageLayout";
import ButtonComponent from "@/components/Shared/ButtonComponent";
import { all_routes } from "@/routes/all_routes";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormProvider,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import FormHandler from "../Components/FormHandler";
import { CustomerTypes } from "../Components/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomerSchema } from "../Components/Schema";

const breadcrumbs = [
  {
    //   label: "Dashboard",
    icon: "ti ti-smart-home",
    href: all_routes.home,
  },
  {
    label: "Customer",
    href: all_routes.customer,
  },
  {
    label: "Create",
  },
];

const Create = () => {
  const navigate = useNavigate();

  const formsContext = useForm<CustomerTypes, any>({
    resolver: yupResolver(CustomerSchema) as unknown as Resolver<
      CustomerTypes,
      any
    >,
    mode: "onBlur", // validate onBlur for initial validation
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit: SubmitHandler<CustomerTypes> = async (values) => {
    console.log({ values });
  };

  // useEffect(() => {
  //   if (isAdding) {
  //     navigate("/");
  //   }
  // }, [isAdding]);

  return (
    <PageLayout
      title="Customers"
      breadcrumbs={breadcrumbs}
      collapseHeader={false}
      rightSection={
        <>
          <ButtonComponent
            label={"Back"}
            icon={"ti ti-arrow-back"}
            extraClass="btn-primary d-flex align-items-center"
            loading={false}
            onClick={() => navigate(-1)}
          />
        </>
      }
    >
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="text-muted">Create New Customer</h5>
            </div>
            <div className="card-body">
              {/*  */}
              <FormProvider {...formsContext}>
                <FormHandler
                  mode={"Create"}
                  onSubmit={handleFormSubmit}
                  loading={false}
                />
              </FormProvider>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Create;
