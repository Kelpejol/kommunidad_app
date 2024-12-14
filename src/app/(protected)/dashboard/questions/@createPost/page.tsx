import Link from "next/link";

import { SquarePen } from "lucide-react";

export default function Page() {
	return (
		<section className="space-y-3">
			<h4 className="text-lg text-black capitalize font-semibold">
				create post
			</h4>
			<div className="p-3 shadow bg-white rounded-lg">
				<div className="flex gap-10 flex-wrap">
					<div className="flex-none">
						<Link href="./home/posts/new" className="p-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100">
							<div className="flex-none">
								<SquarePen
									size={20}
									className="text-black"
								/>
							</div>
							<div className="flex-1">
								<span className="text-black sentence font-semibold fill-gray-200">
									write a post
								</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}