import { Fragment } from "react";

import { LayoutProps } from "./types";

export default function Layout({ children, logUserOut }: LayoutProps) {
	return (
		<section className="space-y-10">
			<div className="space-y-5">
				<h4 className="text-lg font-bold capitalize">log out</h4>
				{logUserOut}
			</div>
		</section>
	);
}