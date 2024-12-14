"use client";

import { usePathname } from "next/navigation";

import { LayoutProps } from "./types";

export default function Layout({ children, createPost, postsByCity }: LayoutProps) {
	const pathname = usePathname();

	if(pathname === "/dashboard/home") {
		return (
			<section className="space-y-16">
				{createPost}
				{postsByCity}
			</section>
		);
	}

	return children;
}