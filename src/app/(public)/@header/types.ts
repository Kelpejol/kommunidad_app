import { LucideIcon } from "lucide-react";

export type Route = {
	href: string;
	name: string;
	Icon: any;
}

export type MobileMenuProps = {
	routes: Route[];
	isLoggedIn: boolean;
}