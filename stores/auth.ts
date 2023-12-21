import { defineStore } from "pinia";
import { LoginRequest, LoginResult, RegisterRequest, Result } from "types";

export const useAuthStore = defineStore("auth", () => {
  const authToken = ref()
  const result = ref()
  
  const setResult = (data?: Result) => (result.value = data);
  const setToken = (data?: string) => (authToken.value = data);
  
  const baseURL = "http://192.168.0.104:8000";
  const login = async (data: LoginRequest) => {
    try {
      const res = await $fetch<LoginResult>(`${baseURL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      setToken(res.token);
      setResult();
    } catch(error: any) {
      setResult(error.data);
      console.log(error.data);
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      const res = await $fetch<Result>(`${baseURL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      setResult(res);
    } catch (error) {
      setResult();
      console.log(error);
    }
  }
  const forgetPassword = async (email: string) => {
    try {
      const res = await $fetch<Result>(`${baseURL}/api/auth/forgotpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setResult(res);
    } catch (error) {
      setResult();
      console.log(error);
    }
  }

  const verifyEmail = async (verificationCode: string) => {
    try {
      const res = await $fetch<Result>(
        `${baseURL}/api/auth/verifyemail/${verificationCode}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResult(res);
    } catch (error) {
      setResult();
      console.log(error);
    }
  }

  const logout = async () => {
    try {
      const res = await $fetch<Result>(`${baseURL}/api/auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res) {
        setResult();
      } else {
        setToken();
        setResult(res);
        // const errorData = await res.json();
        // throw new Error(errorData.message || "Failed to logout.");
      }
    } catch (error) {
      setResult();
      console.log(error);
    }
  }
  return { authToken, result, login, register, forgetPassword, verifyEmail, logout, setResult, setToken};
});
