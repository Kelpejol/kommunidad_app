"use server";

import { Fragment } from "react";
import { SquareMenu, CircleUserRound } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { Route } from "./types";
import { routes } from "./props";
import { getUserData } from "./actions";
import { MobileMenu } from "./components";

export default async function Page() {
	const userData = await getUserData();

	return (
		<header className="py-3 lg:py-4 top-0 left-0 sticky backdrop-blur">
			<div className="container">
				<div className="flex items-center justify-between">
					<div className="flex-none">
						<Link href="/">
							<Image
								width="45"
								height="45"
								src="/favicon.ico"
								alt="Fuzzy Community Logo"
							/>
						</Link>
					</div>
					<div className="hidden lg:block flex-none">
						<div className="flex gap-10 items-center">
							{routes.map(({ name, href, Icon }: Route, index: number) => (
								<Fragment key={index}>
									<Link href={href} className="p-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100">
										<div className="flex-none">
											<Icon size={20} className="text-black" />
										</div>
										<div className="flex-1">
											<span className="text-black capitalize font-semibold">{name}</span>
										</div>
									</Link>
								</Fragment>
							))}
						</div>
					</div>
					<div className="hidden lg:block flex-none">
						<Link href="/dashboard/profile" className="p-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100">
							<div className="flex-none">
								<CircleUserRound size={20} className="text-black" />
							</div>
							<div className="flex-1">
								<span className="text-black capitalize font-semibold">
									{userData?.f_name} {userData?.s_name}
								</span>
							</div>
						</Link>
					</div>
					<div className="lg:hidden flex-none">
						<MobileMenu />
					</div>
				</div>
			</div>
		</header>
	);
}