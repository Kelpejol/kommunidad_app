"use client";

import { useQuery } from "../hooks";
import { SearchBar } from "./components";

import { redirect } from "next/navigation";

export default function Page() {
	const query = useQuery();

	if(!query) {
		redirect("/");
	}

	return (
		<section className="pb-10 border-b">
			<div className="space-y-5">
				<h3 className="text-2xl text-center">
					<span className="font-bold sentence">
						showing search result for: {query}
					</span>
				</h3>
				<SearchBar query={query} />
			</div>
		</section>
	);
}