import { Search, Send } from "lucide-react";

import { SearchBarProps } from "./types";

export function SearchBar({ query }: SearchBarProps) {
	return (
		<form method="get" action="/search">
			<div className="px-5 border rounded-full overflow-hidden">
				<label htmlFor="query" className="flex gap-5 items-center">
					<div className="flex-none">
						<Search className="fill-slate-300 text-slate-600" />
					</div>
					<div className="flex-1">
						<input
							required
							type="text"
							name="query"
							id="search-bar"
							defaultValue={query}
							placeholder="Type question here..."
							className="py-4 w-full block outline-none bg-transparent"
						/>
					</div>
					<div className="flex-none">
						<button type="submit" title="Search for questions">
							<Send className="fill-slate-300 text-slate-600" />
						</button>
					</div>
				</label>
			</div>
		</form>
	);
}