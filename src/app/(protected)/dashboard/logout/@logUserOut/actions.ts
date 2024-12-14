"use server";

import { redirect } from "next/navigation";

import { getCookies } from "@/libs/cookies";

export async function logOut() {
	const cookies = await getCookies();

	cookies.delete("user");
	cookies.delete("token");
}