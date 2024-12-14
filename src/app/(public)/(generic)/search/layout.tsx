import { Fragment, Suspense } from "react";

import { LayoutProps } from "./types";

export default function Layout({ searchBar, searchResults }: LayoutProps) {
	return (
		<Fragment>
			<div className="py-10">
				<div className="container">
					<div className="max-w-2xl mx-auto">
						<div className="space-y-10">
							<Suspense fallback={null}>
								{searchBar}
							</Suspense>
							{searchResults}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}