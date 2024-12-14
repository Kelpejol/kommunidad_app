import { cookies } from "next/headers";

export async function getCookies(): Promise<any> {
	return await cookies();
}