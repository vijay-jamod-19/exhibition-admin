import { isFulfilled, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { resetState } from "./slice/authSlice";

const errorHandler =
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any) => {
    if (action?.payload?.status === 401) {
      toast.error(action?.payload?.data?.message, {
        position: "top-right",
        autoClose: 2000,
      });
      dispatch(resetState());
    } else if (isRejectedWithValue(action)) {
      if (action.payload?.originalStatus === 404) {
        toast.error(action?.payload?.data?.message, {
          position: "top-right",
          autoClose: 2000,
        });
      } else if (action.payload?.status === 409) {
        toast.error(action?.payload?.data?.message, {
          position: "top-right",
          autoClose: 2000,
        });
      } else if (action.payload?.status === "FETCH_ERROR") {
        toast.error(action?.payload?.error, {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        toast.error(action?.payload?.data?.message, {
          position: "top-right",
          autoClose: 2000,
        });
        // toast.error(action?.payload?.data?.message, {
        //   position: toast.POSITION.TOP_RIGHT,
        //   autoClose: 2000,
        //   maxCount: 1,
        // });
      }
    } else if (isFulfilled(action)) {
      if (action.payload?.status === "FAIL") {
        toast.error(action?.payload?.message, {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        if (
          !action.meta.arg.endpointName.includes("get") &&
          action.payload.message
        ) {
          toast.success(action?.payload?.message, {
            position: "top-right",
            autoClose: 2000,
          });
        }
      }
    }
    return next(action);
  };
export default errorHandler;
