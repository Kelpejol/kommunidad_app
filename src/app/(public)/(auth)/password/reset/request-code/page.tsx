import Input from "@/components/Form/Input";

import { Form } from "./components";
import { requestCode } from "./actions";

export default function Page() {
	return (
		<div className="space-y-10">
			<div className="space-y-1">
				<h3 className="font-bold capitalize text-3xl">password reset</h3>
				<p className="sentence text-slate-600">kindly provide your registered email address</p>
			</div>
			<Form
				action={requestCode}
				fields={[
					{
						Component: Input,
						type: "email",
						name: "email",
						title: "email address",
						placeholder: "Type email address"
					},
				]}
			/>
		</div>
	);
}