import { signIn } from "./actions";
import { Form } from "./components";

import Input from "@/components/Form/Input";

export default function Page() {
  return (
    <section className="space-y-10">
      <div className="space-y-0">
				<h3 className="font-bold capitalize text-3xl">sign in</h3>
				<p className="sentence text-slate-600">kindly provide email address and password to login</p>
			</div>
      <Form
        action={signIn}
        fields={[
          {
            Component: Input,
            name: "email",
            type: "email",
            title: "email address",
            placeholder: "Type email address",
          },
          {
            Component: Input,
            name: "password",
            type: "password",
            title: "password",
            placeholder: "*** ** ***",

            canBeVisible: true,
          }
        ]}
      />
    </section>
  );
}