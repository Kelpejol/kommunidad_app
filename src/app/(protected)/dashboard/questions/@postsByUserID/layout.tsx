import { LayoutProps } from "./types";

export default function Layout({ children }: LayoutProps) {
	return (
		<section className="space-y-3">
			<h4 className="text-lg text-black capitalize font-semibold">
				my questions
			</h4>
			<div className="space-y-5">
				{children}
			</div>
		</section>
	);
}