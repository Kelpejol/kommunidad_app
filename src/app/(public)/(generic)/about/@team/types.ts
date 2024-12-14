import { LucideIcon } from "lucide-react";

export type TeamMemberProps = {
	role: string;
	fullName: string;
	socials: Social[];
	image: {
		src: string | null;
		alt: string;
	};
}

export type Social = {
	url: string;
	name: string;
	Icon: LucideIcon;
}