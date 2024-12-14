"use client";

import { useSearchParams } from "next/navigation";

export function useQuery() {
	const searchParams = useSearchParams();
	const query = searchParams.get("query");

	return query;
}