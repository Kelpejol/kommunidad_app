import { Fragment } from "react";

import { AboutUs } from "./types";
import { aboutsUs } from "./props";
import { HowTo } from "./components";

export default function Page() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container">
				<div className="space-y-20">
					<div className="max-w-xl mx-auto">
						<div className="text-center space-y-5">
							<h3 className="text-4xl font-semibold">
								<span className="sentence">
									we know exactly how to help you succeed
								</span>
							</h3>
							<p className="text-lg">
								<span className="text-black sentence">
									simplifying selling and getting paid for solopreneurs
								</span>
							</p>
						</div>
					</div>
					<div className="space-y-10">
						{aboutsUs.map((props: AboutUs, index: number) => (
							<Fragment key={index}>
								<HowTo
									{...props}
									
									flipped={Boolean(index % 2)}
								/>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}