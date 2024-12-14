"use server";

import { baseURL } from "@/libs/config";

import { RequestCode } from "./types";
import { getCookies } from "@/libs/cookies";

export async function requestCode(_: RequestCode, formData: FormData): Promise<RequestCode> {
	const formObject = {
		email: formData.get("email")
	}

	try {
		const url: URL = new URL("/api/user/sendToken", baseURL);
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
			await saveData("reset_email", formObject?.email as string);

			return {
				success: true,
				message: "A code has been sent to your email address"
			}
		}
		else if(response.status === 422) {
			await saveData("reset_email", formObject?.email as string);

			return {
				success: true,
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
			success: true,
			message: "An error occured, please try again"
		}
	}
}

async function saveData(name: string, value: string): Promise<void> {
	const cookies = await getCookies()

	cookies.set({
		name,
		value,
		path: "./", 
		httpOnly: true,
	});
}