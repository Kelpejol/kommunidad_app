"use server";

import { baseURL } from "@/libs/config";
import { getCookies } from "@/libs/cookies";

import { SignUp } from "./types";

export async function signUp(_: SignUp, formData: FormData): Promise<SignUp> {
  const formObject = Object.fromEntries(formData);

  try {
    const url = new URL("/api/user/register/user", baseURL);
    const options: RequestInit = {
      method: "post",
      body: JSON.stringify(formObject),
      headers: {
        "content-type": "application/json"
      }
    }

    const request = await fetch(url, options);
    const response = await request.json();

    if(response.status === 200) {
      await saveData("token", response.token);
      await saveData("user", JSON.stringify(response.user));

      return {
        success: true,
        message: "Sign up successful"
      }
    }
    else if(response.status === 422) {
      return {
        formData,
        success: false,
        message: response.message,
      };
    }

    return {
      formData,
      success: false,
      message: "Something went wrong, kindly contact the administrator",
    };
  }
  catch(error: any) {
    console.error(error);

    return {
      formData,
      success: false,
      message: "An error occured, please try again",
    };
  }
}

async function saveData(name: string, value: string): Promise<void> {
  const cookies = await getCookies();

  cookies.set({ name, value, path: "/", httpOnly: true });
}