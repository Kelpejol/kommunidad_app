"use client";

import Link from "next/link";

import { Fragment, useState } from "react";

import { Option } from "./types";
import { options } from "./props";

import { LucideIcon, RectangleEllipsis } from "lucide-react";

export function SearchResult() {
	return (
		<article className="border-2 rounded-lg">
			<div className="p-5">
				<div className="space-y-5">
					<Header />
					<Body />
					<Footer />
				</div>
			</div>
		</article>
	);
}


function Header() {
	return (
		<header className="flex gap-10 items-center justify-between">
			<div className="flex-1">
				<div className="flex gap-3 items-center">
					<div className="flex-none">
						<div className="w-14 h-14 rounded-full bg-gray-300" />
					</div>
					<div className="flex-1">
						<div className="space-y-0">
							<Link href={"/user/taslim-eniola-musa-azeez"} className="text-lg font-semibold leading-1">
								<span className="capitalize one-line text-slate-600">
									taslim eniola musa-azeez
								</span>
							</Link>
							<p className="text-base leading-1">
								<span className="capitalize one-line">
									Chicago, Illinois
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-none">
				<button type="button" className="text-slate-600">
					<RectangleEllipsis />
				</button>
			</div>
		</header>
	);
}

function Body() {
	const [seeAll, setSeeAll] = useState <boolean> (false);

	function toggleSeeAll(event: any) {
		event.preventDefault();

		setSeeAll((seeAll) => !seeAll);
	}

	return (
		<section className="space-y-1">
			<p className="text-lg cursor-default" onClick={toggleSeeAll}>
				<span className={`sentence font-medium text-slate-600 ${!seeAll && "two-lines"}`}>
					So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
				</span>
			</p>
		</section>
	);
}

function Footer() {
	return (
		<footer className="gap-3 flex items-center">
			{options.map(({ Icon, title, action }: Option, index: number) => (
				<Fragment key={index}>
					<div className="flex-1">
						<button type="button" className="p-2 w-full border-2 rounded-lg hover:bg-gray-100">
							<div className="gap-3 items-center inline-flex justify-center">
								<div className="flex-none">
									<Icon size={20} />
								</div>
								<div className="flex-none">
									<span className="text-sm sentence font-medium">
										{title}
									</span>
								</div>
							</div>
						</button>
					</div>
				</Fragment>
			))}
		</footer>
	);
}