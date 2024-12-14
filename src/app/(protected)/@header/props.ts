import { House, Compass, LocateFixed, CircleDollarSign } from "lucide-react";

import { Route } from "./types"

export const routes: Route[] = [
	{
		Icon: House,
		name: "home",
		href: "/",
	},
	{
		Icon: Compass,
		name: "about",
		href: "/about",
	},
	{
		Icon: LocateFixed,
		name: "contact us",
		href: "/contact-us",
	},
	{
		Icon: CircleDollarSign,
		name: "KOM token",
		href: "/kom-token",
	},
];