"use client";

import { redirect } from "next/navigation";

import { logOut } from "./actions";

export default function Page() {

	async function onlogOut() {
		await logOut();

		redirect("/auth");
	}

	return (
		<div className="py-10 shadow bg-red-50 rounded-lg">
			<div className="container">
				<div className="max-w-lg mx-auto">
					<div className="text-center space-y-7">
						<div className="space-y-1">
							<h4 className="text-xl capitalize font-semibold">log out</h4>
							<p className="sentence text-slate-600">
								Are you sure you want to log out? Your session will be removed and logging in will be required next time
							</p>
						</div>
						<div>
							<button type="button" onClick={onlogOut} className="px-10 py-3 shadow rounded-lg bg-red-600 ring-offset-2 ring-red-600 transition hover:ring-2">
								<span className="text-white capitalize font-semibold">
									log out
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}