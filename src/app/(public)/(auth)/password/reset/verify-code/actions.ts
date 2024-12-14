"use server";

import { baseURL } from "@/libs/config";
import { getCookies } from "@/libs/cookies";

import { VerifyCode } from "./types";

export async function verifyCode(_: VerifyCode, formData: FormData): Promise<VerifyCode> {
	const resetEmail = await getResetEmail();

	const formObject = {
		email: resetEmail,
		token: formData.get("token")
	}

	try {
		const url: URL = new URL("/api/user/tokenVerification", baseURL);
		const options: RequestInit = {
			method: "post",
			body: JSON.stringify(formObject),
			headers: {
				"content-type": "application/json"
			}
		}

		const request = await fetch(url, options);
		const response = await request.json();

		if(String(response.status).startsWith("2")) {
			return {
				success: true,
				message: "Code verified successfully"
			}
		}
		else if(response.status === 422) {
			return {
				success: false,
				message: response.message
			}
		}

		return {
			success: false,
			message: "Something went wrong, kindly contact the administrator"
		}
	}
	catch(error: any) {
		console.error(error);
	
		return {
			success: false,
			message: "An error occured, please try again"
		}
	}
}

export async function getResetEmail(): Promise<string | undefined> {
	const cookies = await getCookies();
	const cookie = cookies.get("reset_email");

	if(cookie) {
		return cookie.value;
	}

	return;
}