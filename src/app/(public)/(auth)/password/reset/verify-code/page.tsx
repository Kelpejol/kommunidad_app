"use server";

import Input from "@/components/Form/Input";

import { Form } from "./components";
import { verifyCode, getResetEmail } from "./actions";

export default async function Page() {
	const resetEmail = await getResetEmail();

	return (
		<div className="space-y-10">
			<div className="space-y-1">
				<h3 className="font-bold capitalize text-3xl">password reset</h3>
				<p className="sentence text-slate-600">
					kindly provide the 4-digits code that was sent to your email address:&nbsp;
					<span className="font-semibold">{resetEmail}</span>
				</p>
			</div>
			<Form
				action={verifyCode}
				fields={[
					{
						Component: Input,
						type: "password",
						name: "token",
						title: "4-digits code",
						placeholder: "XXXX"
					},
				]}
			/>
		</div>
	);
}