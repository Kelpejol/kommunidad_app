import { LucideIcon } from "lucide-react";

export type Option = {
	Icon: LucideIcon,
	title: string;
	action: () => Promise<void> | void;
}