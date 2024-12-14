"use server";

import { baseURL } from "@/libs/config";
import { getCookies } from "@/libs/cookies";

import { SignIn } from "./types";

export async function signIn(_: SignIn, formData: FormData): Promise<SignIn> {
  const formObject = JSON.stringify({
    email: formData.get("email"),
    password: formData.get("password")
  });

  try {
    const url = new URL("/api/user/login", baseURL);

    const options: RequestInit = {
      method: "post",
      body: formObject,
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
        message: "Sign in successful"
      }
    }

    return {
      formData,
      success: false,
      message: response.message,
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