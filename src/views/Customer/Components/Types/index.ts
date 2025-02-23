export interface CustomerTypes {
  profile_photo: string;
  first_name: string;
  last_name: string;
  mobile_number: number;
  email: string;
  profession: string;
  company_name: string;
  designation: string;
  password: string;
  password_confirmation: string;
  address: {
    id: number | string;
    address_line_1: string;
    address_line_2: string;
    country: string;
    state: string;
    city: string;
    pincode: number;
  };
}
