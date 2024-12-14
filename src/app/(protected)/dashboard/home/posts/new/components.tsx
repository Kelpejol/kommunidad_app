"use client";

import { TitleBlockProps } from "./types";

export function TitleBlock({ Icon, text }: TitleBlockProps) {
	return (
		<div className="gap-3 inline-flex items-center">
			<div className="flex-none">
				<Icon
					size={20}
					className="text-black"
				/>
			</div>
			<div className="flex-none">
				<span className="text-black sentence font-semibold fill-gray-200">
					{text}
				</span>
			</div>
		</div>
	);
}