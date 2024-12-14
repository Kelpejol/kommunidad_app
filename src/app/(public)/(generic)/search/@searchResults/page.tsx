import { Fragment } from "react";

import { SearchResult } from "./components";

export default function Page() {
	return (
		<section className="space-y-5">
			<p className="text-base font-medium">
				<span className="italic sentence">
					showing 1-8 of 2,043,434 results...
				</span>
			</p>
			<div className="space-y-5">
				{Array(8).fill(null).map((_: null, index: number) => (
					<Fragment key={index}>
						<SearchResult />
					</Fragment>
				))}
			</div>
		</section>
	);
}