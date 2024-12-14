"use server";

import { Fragment } from "react";
import { ScanFace, MonitorDot } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { Route } from "./types";
import { routes } from "./props";
import { MobileMenu } from "./components";

import { getToken } from "@/libs/token";

export default async function Page() {
	const token = await getToken();

	const mobileRoutes = routes.map(({ Icon, ...otherProps }: Route) => ({
		...otherProps,
		Icon: <Icon size={20} className="text-black" />
	}));

	return (
		<header className="py-3 z-10 top-0 left-0 sticky backdrop-blur lg:py-4">
			<div className="container">
				<div className="flex items-center justify-between">
					<div className="flex-none">
						<Link href="/">
							<Image
								width="40"
								height="40"
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
					{token ? (
						<div className="hidden lg:block flex-none">
							<Link href="/dashboard" className="p-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100">
								<div className="flex-none">
									<MonitorDot size={20} className="text-black" />
								</div>
								<div className="flex-1">
									<span className="text-black capitalize font-semibold">dashboard</span>
								</div>
							</Link>
						</div>
					) : (
						<div className="hidden lg:block flex-none">
							<Link href="/auth" className="p-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100">
								<div className="flex-none">
									<ScanFace size={20} className="text-black" />
								</div>
								<div className="flex-1">
									<span className="text-black font-semibold">Login | Register</span>
								</div>
							</Link>
						</div>
					)}
					<div className="lg:hidden flex-none">
						<MobileMenu
							routes={mobileRoutes}
							isLoggedIn={Boolean(token)}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}