"use client";

import Link from "next/link";
import Image from "next/image";

import { HowToProps } from "./types";

export function HowTo({ image, title, flipped, description, link }: HowToProps) {
	return (
		<article className={`flex gap-5 flex-wrap lg:flex-nowrap ${!flipped && "flex-row-reverse"}`}>
			<div className="w-full lg:w-3/12">
				<div className="z-0 h-full max-w-56 min-h-56 relative lg:max-w-full">
					<Image
						fill={true}
						src={image.src || ""}
						alt={image.alt}
						className="bg-red-300 rounded-lg"
						style={{
							objectFit: "contain",
							objectPosition: "center"
						}}
					/>
				</div>
			</div>
			<div className="w-full lg:w-9/12">
				<div className="border bg-white rounded-lg">
					<div className="p-10">
						<div className="space-y-5">
							<h4 className="text-2xl font-semibold">
								<span className="sentence">
									{title}
								</span>
							</h4>
							<h5 className="text-xl">
								<span className="sentence text-slate-600">
									{description}
								</span>
							</h5>
							<div className="pt-5">
								<Link href={link} className="group">
									<div className="py-3 px-7 border ring-offset-2 ring-purple-600 inline-block rounded-full transition-all border-purple-600 group-hover:ring-2 group-hover:bg-purple-600">
										<span className="text-lg sentence font-semibold transition-all text-purple-600 group-hover:text-white">
											start your journey
										</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}