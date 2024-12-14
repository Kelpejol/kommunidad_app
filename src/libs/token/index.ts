import { getCookies } from "@/libs/cookies";

export async function getToken() {
	const cookies = await getCookies();
	const token = cookies.get("token");

	if(token) {
		return token.value;
	}

	return null;
}