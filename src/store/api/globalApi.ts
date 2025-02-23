import emptyApi from ".";

export const globalApi = emptyApi.injectEndpoints({
  endpoints: (build) => ({
    getCountry: build.query<any, void>({
      query: () => "countrystate/country",
      transformResponse: (response: { data: any }) => response.data,
    }),
    getState: build.query<any, void | any>({
      query: (id: any) => `countrystate/state/${id}`,
      transformResponse: (response: { data: any }) => response.data,
    }),
    getCity: build.query<any, void>({
      query: () => "city",
      transformResponse: (response: { data: any }) => response.data,
    }),
    getPincode: build.query<any, void>({
      query: () => "pincode",
      transformResponse: (response: { data: any }) => response.data,
    }),
  }),
});

export const {
  useGetCountryQuery,
  useGetStateQuery,
  useGetCityQuery,
  useGetPincodeQuery,
} = globalApi;
