import { Fragment } from "react";

import { LayoutProps } from "./types";

export default function Layout({ formSection }: LayoutProps) {
	return (
		<Fragment>
			{formSection}
		</Fragment>
	);
}