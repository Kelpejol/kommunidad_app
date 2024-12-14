"use server";

import Input from "@/components/Form/Input";

import { Form } from "./components";
import { getUserData, updateUserData } from "./actions";

export default async function Page() {
	const userData = await getUserData();

	return (
		<section className="mx-auto max-w-2xl">
			<div className="shadow bg-white rounded-lg">
				<div className="py-10 px-5">
					<div className="space-y-10">
						<h3 className="text-xl font-bold capitalize">
							user information
						</h3>
						<div className="space-y-10">
							<button disabled type="button" className="w-28 h-28 shadow rounded-full bg-orange-600">
								<p className="text-white font-semibold text-5xl">MA</p>
							</button>
							<Form
								data={userData}
								action={updateUserData}
								fields={[
									{
										Component: Input,
										type: "text",
										name: "f_name",
										title: "first name",
									},
									{
										Component: Input,
										type: "text",
										name: "m_name",
										title: "middle name",
									},
									{
										Component: Input,
										type: "text",
										name: "s_name",
										title: "surname",
									},
									{
										Component: Input,
										type: "email",
										name: "email",
										title: "email address",
									},
									{
										Component: Input,
										type: "phone",
										name: "phone_no",
										title: "phone number",
									},
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}