"use client";

import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";

import { Linkedin } from "lucide-react";

import { Social, TeamMemberProps } from "./types";

export function TeamMember({ role, image, socials, fullName }: TeamMemberProps) {
	return (
		<article className="border bg-white rounded-lg">
			<div className="p-5">
				<div className="space-y-0">
					<div className="flex gap-5">
						<div className="flex-1">
							<div className="space-y-0">
								<p className="text-xl font-semibold leading-1">
									<span title={fullName} className="capitalize one-line text-purple-600">
										{fullName}
									</span>
								</p>
								<p title={role} className="text-lg leading-1">
									<span className="capitalize one-line">
										{role}
									</span>
								</p>
								<p className="pt-4">
									<div className="flex gap-3">
										{socials.map(({ url, name, Icon }: Social, index: number) => (
											<Fragment key={index}>
												<div className="flex-none">
													<Link href={url} title={`${name} profile link`} className="group">
														<button className="w-10 h-10 border rounded-lg ring-offset-2 transition-all ring-purple-600 border-purple-600 group-hover:ring-2 group-hover:bg-purple-600">
															<Icon size={20} className="mx-auto stroke-none fill-purple-600 group-hover:fill-white" />
														</button>
													</Link>
												</div>
											</Fragment>
										))}
									</div>
								</p>
							</div>
						</div>
						<div className="flex-none">
							<Image
								width="80"
								height="80"
								alt={image.alt}
								src={image.src || ""}
								className="rounded-full bg-purple-300"
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}