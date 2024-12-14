"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Send } from "lucide-react";

import { slabs } from "./props";
import { Slab, URL } from "./types";

export function ContactForm() {
	return (
		<div className="space-y-5">
			<p className="text-lg font-medium">
				<span className="sentence text-slate-600">
					got a question about how to better meetings with your team? We&apos;ve got answers.
				</span>
			</p>
			<form className="grid gap-5 grid-cols-12">
				<div className="col-span-12">
					<label className="block w-full space-y-2">
						<p className="sentence font-semibold">full name *</p>
						<input
							type="text"
							placeholder="Type full name here..."
							className="p-3 block w-full border rounded-lg bg-transparent"
						/>
					</label>
				</div>
				<div className="col-span-12">
					<label className="block w-full space-y-2">
						<p className="sentence font-semibold">email address *</p>
						<input
							type="text"
							placeholder="Type email address here..."
							className="p-3 block w-full border rounded-lg bg-transparent"
						/>
					</label>
				</div>
				<div className="col-span-12">
					<label className="block w-full space-y-2">
						<p className="sentence font-semibold">Type message here *</p>
						<textarea
							rows={4}
							placeholder="Leave a message here..."
							className="p-3 block w-full border resize-none rounded-lg bg-transparent"
						></textarea>
					</label>
				</div>
				<div className="col-span-12">
					<button className="mt-5 py-3 px-10 shadow-lg rounded-lg bg-purple-600">
						<div className="gap-3 flex items-center">
							<div className="flex-none">
								<Send size={20} className="text-white" />
							</div>
							<div className="flex-none">
								<span className="font-bold text-white capitalize">
									send message
								</span>
							</div>
						</div>
					</button>
				</div>
			</form>
		</div>
	);
}

export function ContactSlabs() {
	return (
		<section className="space-y-16">
			{slabs.map(({ Icon, title, links }: Slab, index: number) => (
				<Fragment key={index}>
					<article className="gap-5 flex-wrap space-y-3 md:flex md:space-y-0">
						<div className="flex-none">
							<div className="p-7 rounded-lg bg-pink-300">
								<Icon size={35} strokeWidth={2} />
							</div>
						</div>
						<div className="flex-1">
							<div className="space-y-5">
								<h4 className="text-xl">
									<span className="sentence font-medium">
										{title}
									</span>
								</h4>
								<div className="space-y-3">
									{links.map(({ type, name, href }: URL, index: number) => {
										switch(type) {
											case "button": return (
												<Fragment key={index}>
													<Link href={href}>
														<button type="button" className="py-2 px-7 border-2 border-black rounded-full">
															<span className="text-lg sentence font-semibold">
																{name}
															</span>
														</button>
													</Link>
												</Fragment>
											);
											case "link": return (
												<Fragment key={index}>
													<div>
														<Link href={href} className="text-lg">
															<span className="underline font-medium">
																{name}
															</span>
														</Link>
													</div>
												</Fragment>
											);
										}
									})}
								</div>
							</div>
						</div>
					</article>
				</Fragment>
			))}
			{/*<article className="gap-5 flex-wrap space-y-3 md:flex md:space-y-0">
				<div className="flex-none">
					<div className="p-7 rounded-lg bg-pink-300">
						<List size={35} strokeWidth={2} />
					</div>
				</div>
				<div className="flex-1">
					<div className="space-y-5">
						<h4 className="text-xl">
							<span className="sentence font-medium">
								check out our support center for answers on general questions
							</span>
						</h4>
						<div>
							<Link href="">
								<button type="button" className="py-3 px-10 border-2 border-black rounded-full">
									<span className="text-lg sentence font-semibold">
										learn more
									</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</article>
			<article className="gap-5 flex-wrap space-y-3 md:flex md:space-y-0">
				<div className="flex-none">
					<div className="p-7 rounded-lg bg-pink-300">
						<Group size={35} strokeWidth={2} />
					</div>
				</div>
				<div className="flex-1">
					<div className="space-y-5">
						<h4 className="text-xl">
							<span className="sentence font-medium">
								we&apos;re growing fast! Interested in working with us? Send us a message
							</span>
						</h4>
						<ul className="space-y-3">
							<li>
								<Link href="mailto://support@komunidad.com" className="text-lg">
									<span className="underline font-medium">
										support@komunidad.com
									</span>
								</Link>
							</li>
							<li>
								<Link href="mailto://inquiries@komunidad.com" className="text-lg">
									<span className="underline font-medium">
										inquiries@komunidad.com
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</article>*/}
		</section>
	);
}