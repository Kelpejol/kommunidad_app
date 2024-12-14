import { List, Users, Group } from "lucide-react";

import { Slab } from "./types";

export const slabs: Slab[] = [
	{
		Icon: Users,
		title: "learn more about the service we render at Komunidad World",
		links: [
			{
				type: "button",
				name: "learn more",
				href: "/about-us"
			}
		]
	},
	{
		Icon: List,
		title: "check out our support center for answers on general questions",
		links: [
			{
				type: "button",
				name: "learn more",
				href: "/contact-us"
			}
		]
	},
	{
		Icon: Group,
		title: "we're growing fast! Interested in working with us? Send us a message",
		links: [
			{
				type: "link",
				name: "support@komunidad.com",
				href: "mailto://support@komunidad.com"
			},
			{
				type: "link",
				name: "inquiries@komunidad.com",
				href: "mailto://inquiries@komunidad.com"
			},
		]
	},
];