import { LucideIcon } from "lucide-react";

export type Slab = {
	Icon: LucideIcon;
	title: string;
	links: URL[]
}

export type URL = {
	href: string;
	name: string;
	type: "button" | "link";
}