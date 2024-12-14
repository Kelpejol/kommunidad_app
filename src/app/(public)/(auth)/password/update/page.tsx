import Input from "@/components/Form/Input";

import { Form } from "./components";
import { updatePassword } from "./actions";

export default function Page() {
	return (
		<div className="space-y-10">
			<div className="space-y-1">
				<h3 className="font-bold capitalize text-3xl">password update</h3>
				<p className="sentence text-slate-600">enter and confirm a new password</p>
			</div>
			<Form
				action={updatePassword}
				fields={[
					{
						Component: Input,
						type: "password",
						name: "password",
						placeholder: "XXXX-XXXX",
						title: "create password",
					},
					{
						Component: Input,
						type: "password",
						canBeVisible: true,
						placeholder: "XXXX-XXXX",
						title: "confirm password",
						name: "password_confirmation",
					},
				]}
			/>
		</div>
	);
}