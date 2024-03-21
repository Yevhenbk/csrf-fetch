export interface UserStateData {
  username: string;
  password: string;
  csrfToken: string;
  isLoggedIn: boolean | null;
  isLoading: boolean;
};