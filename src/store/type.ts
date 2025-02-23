export interface User {
  id: string;
  name: string;
  mobile: string;
  email: string | null;
  email_verified_at: string | null;
  otp: string;
  otp_expiry: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  // Add other relevant properties if needed
}

export interface RootState {
  auth: AuthState;
  // Add other slices if needed
}
