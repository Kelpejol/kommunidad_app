import { Fragment } from "react";

import { LayoutProps } from "./types";

export default function Layout({ hero, team, howTo }: LayoutProps) {
	return (
		<Fragment>
			{hero}
			{howTo}
			{team}
		</Fragment>
	);
}