import { LayoutProps } from "./types";

export default function Layout({ sideBar, children }: LayoutProps) {
	return (
		<section className="py-10">
			<div className="container">
				<div className="grid gap-20 col-span-6 lg:grid-cols-12">
					<div className="hidden col-span-6 lg:block lg:col-span-3">
						{sideBar}
					</div>
					<div className="col-span-6 lg:col-span-9">
						<div className="pt-5 pb-10">
							{children}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}