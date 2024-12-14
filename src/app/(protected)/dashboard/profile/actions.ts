"use server";

import { getCookies } from "@/libs/cookies";

import { GetUserData, UpdateUserData } from "./types";

export async function getUserData(): Promise<GetUserData> {
	const cookies = await getCookies();
	const cookie = cookies.get("user");

	if(cookie) {
		try {
			return JSON.parse(cookie.value);
		}
		catch(error: any) {
			console.error({ error });

			return null;
		}
	}
	
	return null;
}

export async function updateUserData(_: UpdateUserData, formData: FormData): Promise<UpdateUserData> {
	return {
		success: false,
		message: "An error occured, please try again"
	}
}