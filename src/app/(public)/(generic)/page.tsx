import { Send, Search } from "lucide-react";

import { PhraseList } from "./components";

export default function Page() {
  return (
    <section className="py-20">
			<div className="container">
				<div className="lg:max-w-xl mx-auto">
					<div className="text-center">
						<div className="space-y-10">
							<div className="space-y-0">
								<h4 className="font-bold sentence text-2xl md:text-3xl">what question do you have today?</h4>
								<p className="sentence text-slate-600">ask our ever-ready community and get valid responses in no time</p>
							</div>
							<form method="get" action="/search">
								<div className="px-5 border rounded-full overflow-hidden">
									<div className="flex gap-5 items-center">
										<div className="flex-none">
											<Search className="fill-slate-300 text-slate-600" />
										</div>
										<div className="flex-1">
											<input
												required
												type="text"
												name="query"
												placeholder="Type question here..."
												className="py-4 w-full block outline-none bg-transparent"
											/>
										</div>
										<div className="flex-none">
											<button type="submit" title="Search for questions">
												<Send className="fill-slate-300 text-slate-600" />
											</button>
										</div>
									</div>
								</div>
							</form>
							<PhraseList />
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}