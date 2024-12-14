import { LayoutProps } from "./types";

export default function Layout({ uploadQuestion }: LayoutProps) {
	return (
		<section className="space-y-3">
			<h4 className="text-lg text-black capitalize font-semibold">
				new post
			</h4>
			<div>
				{uploadQuestion}
			</div>
		</section>
	);
}