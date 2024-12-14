"use server";

import { GetUserData } from "./types";

import { getCookies } from "@/libs/cookies";

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
