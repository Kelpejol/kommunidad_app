import { LucideIcon } from "lucide-react";

export type Route = {
	href: string;
	name: string;
	Icon: LucideIcon;
}

export type GetUserData = null | {
	[key: string]: any;
}

export type MobileMenuProps = {
	routes: Route[];
}