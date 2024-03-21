import { Dispatch, SetStateAction } from "react";
import { UserStateData } from "./userData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface AuthProps {
  (
    csrfToken: string, 
    setUser: Dispatch<SetStateAction<UserStateData>>,
    redirect: AppRouterInstance, 
    formData?: FormData
  ): Promise<void>;
};