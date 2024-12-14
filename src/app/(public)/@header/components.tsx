"use client";

import Link from "next/link";

import { useRef, useState, Fragment } from "react";
import { ScanFace, SquareMenu, MonitorDot } from "lucide-react";

import { Route, MobileMenuProps } from "./types";

export function MobileMenu({ routes, isLoggedIn }: MobileMenuProps) {
	return (
		<details className="relative">
			<summary className="rounded-lg inline-block cursor-pointer hover:bg-gray-100">
				<button disabled type="button" className="p-3 pointer-events-none inline-flex gap-3 items-center rounded-lg">
					<div className="flex-none">
						<SquareMenu size={20} className="text-black" />
					</div>
					<div className="flex-1">
						<span className="text-black capitalize font-semibold fill-gray-200">menu</span>
					</div>
				</button>
			</summary>
			<nav className="min-w-[250px] border bg-white top-full right-0 absolute rounded-lg">
				<div className="py-5 divide-y">
					{routes.map(({ href, name, Icon }: Route, index: number) => (
						<Fragment key={index}>
							<Link href={href} className="py-5 px-5 flex w-full gap-3 text-left items-center hover:bg-gray-100">
								<div className="flex-none">
									{Icon}
								</div>
								<div className="flex-1">
									<span className="text-black capitalize font-semibold fill-gray-200">
										{name}
									</span>
								</div>
							</Link>
						</Fragment>
					))}
					{isLoggedIn ? (
						<Link href="/dashboard" className="py-5 px-5 flex w-full gap-3 text-left items-center hover:bg-gray-100">
							<div className="flex-none">
								<MonitorDot size={20} className="text-black" />
							</div>
							<div className="flex-1">
								<span className="text-black capitalize font-semibold">dashboard</span>
							</div>
						</Link>
					) : (
						<Link href="/auth" className="py-5 px-5 flex w-full gap-3 text-left items-center hover:bg-gray-100">
							<div className="flex-none">
								<ScanFace size={20} className="text-black" />
							</div>
							<div className="flex-1">
								<span className="text-black capitalize font-semibold">authenticate</span>
							</div>
						</Link>
					)}
				</div>
			</nav>
		</details>
	);
}