"use client";

import { Fragment } from "react";

import { teamMembers } from "./props";
import { TeamMember } from "./components";
import { TeamMemberProps } from "./types";

export default function Page() {
	return (
		<section className="py-32 bg-gray-50">
			<div className="container">
				<div className="space-y-20">
					<div className="max-w-2xl mx-auto">
						<div className="text-center space-y-2">
							<p className="text-purple-600">
								<span className="uppercase font-semibold">
									our team
								</span>
							</p>
							<h3 className="text-4xl font-semibold">
								<span className="sentence">
									meet the amazing team
								</span>
							</h3>
						</div>
					</div>
					<div className="grid gap-5 grid-cols-12">
						{teamMembers.map((teamMember: TeamMemberProps, index: number) => (
							<Fragment key={index}>
								<div className="col-span-4">
									<TeamMember {...teamMember} />
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}