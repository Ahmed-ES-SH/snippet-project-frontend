import { LoginFormData } from "@/app/components/auth/login/LoginForm";
import { request } from "../global/globalRequest";
import { AUTH_API } from "@/app/constants/auth.api";

export async function login(data: LoginFormData) {
  const response = await request({
    endpoint: AUTH_API.LOGIN,
    method: "POST",
    body: data,
  });

  return response;
}
