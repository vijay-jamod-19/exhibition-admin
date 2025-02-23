import emptyApi from ".";

export const authApi = emptyApi.injectEndpoints({
  endpoints: (build: any) => ({
    login: build.mutation({
      query: (body: any) => ({
        url: "auth/login",
        method: "post",
        body,
      }),
    }),

    sendOTP: build.mutation({
      query: (body: any) => ({
        url: "auth/send-otp",
        method: "post",
        body,
      }),
    }),
    verifyOTP: build.mutation({
      query: (body: any) => ({
        url: "auth/verify-otp",
        method: "post",
        body,
      }),
    }),
    changePassword: build.mutation({
      query: (body: any) => ({
        url: "auth/change-password",
        method: "post",
        body,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "auth/logout",
        method: "post",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
  useChangePasswordMutation,
  useLogoutMutation,
} = authApi;
