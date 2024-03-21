import { Dispatch, SetStateAction } from "react";
import { UserStateData } from "./userData";

export interface AuthProps {
  (
    csrfToken: string, 
    setUser: Dispatch<SetStateAction<UserStateData>>, 
    formData: FormData
  ): Promise<void>;
};