import { ContactForm, ContactSlabs } from "./components";

export default function Page() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="flex flex-wrap gap-x-10 gap-y-20 lg:flex-nowrap">
					<div className="w-full lg:w-6/12">
						<div className="space-y-5">
							<h3 className="text-3xl">
								<span className="capitalize font-semibold text-purple-600">
									contact us
								</span>
							</h3>
							<ContactForm />
						</div>
					</div>
					<div className="w-full lg:w-6/12">
						<ContactSlabs />
					</div>
				</div>
			</div>
		</section>
	);
}