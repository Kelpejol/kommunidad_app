import { signUp } from "./actions";
import { Form } from "./components";

import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";

export default function Page() {
  return (
    <section className="space-y-10">
      <div className="space-y-0">
				<h3 className="font-bold capitalize text-3xl">sign up</h3>
				<p className="sentence text-slate-600">complete registration in just a few steps</p>
			</div>
      <Form
        action={signUp}
        sections={[
          {
            title: "account type",
            fields: [
              {
                Component: Select,
                name: "accountType",
                title: "account type",
                placeholder: "Choose an account type",
                options: [
                  {
                    name: "regular user",
                    value: "regular_user"
                  },
                  {
                    name: "advertizer",
                    value: "advertizer"
                  },
                ]
              },
            ]
          },
          {
            title: "personal information",
            fields: [
              {
                Component: Input,
                name: "first_name",
                type: "text",
                title: "first name",
                placeholder: "Type first name",
              },
              {
                Component: Input,
                name: "middle_name",
                type: "text",
                title: "middle name",
                placeholder: "Type middle name",
              },
              {
                Component: Input,
                name: "surname",
                type: "text",
                title: "last name",
                placeholder: "Type last name",
              },
            ]
          },
          {
            title: "contact information",
            fields: [
              {
                Component: Input,
                name: "email",
                type: "email",
                title: "email address",
                placeholder: "Type email address",
              },
              {
                Component: Input,
                name: "phone_no",
                type: "text",
                title: "phone number",
                placeholder: "Type phone number",
              },
            ]
          },
          {
            title: "primary country",
            fields: [
              {
                Component: Select,
                name: "country_1",
                title: "country",
                placeholder: "Select primary country",
              },
              {
                Component: Select,
                name: "city_1",
                title: "city",
                placeholder: "Select primary city",
              },
            ]
          },
          {
            title: "secondary country",
            fields: [
              {
                Component: Select,
                name: "country_2",
                title: "country",
                placeholder: "Select secondary country",
              },
              {
                Component: Select,
                name: "city_2",
                title: "city",
                placeholder: "Select secondary city",
              },
            ]
          },
          {
            title: "account security",
            fields: [
              {
                Component: Input,
                type: "password",
                name: "password",
                title: "create password",
                placeholder: "Type new password",
              },
              {
                Component: Input,
                type: "password",
                name: "password_confirmation",
                title: "confirm password",
                placeholder: "Confirm new password",
              },
            ]
          },
          {
            title: "referral (optional)",
            fields: [
              {
                Component: Input,
                type: "text",
                name: "referral_code",
                title: "referral code",
                placeholder: "Type referral code"
              }
            ]
          }
        ]}
      />
    </section>
  );
}