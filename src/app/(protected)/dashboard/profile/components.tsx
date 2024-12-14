"use client";

import { useState, useActionState, Fragment } from "react";

import { Send, Loader, UserRoundPen } from "lucide-react";

import { FormProps } from "./types";

export function Form({ data, action, fields }: FormProps) {
	const [enabled, setEnabled] = useState <boolean> (false);
	const [formState, formAction, isPending = true] = useActionState(action, null);

	return (
		<section className="space-y-0">
			<form action={formAction} className="space-y-7">
				{fields.map(({ Component, name, ...otherProps }, index: number) => {
					return (
						<Fragment key={index}>
							<Component
								name={name}
								disabled={!enabled}
								value={data && data[name]}

								{...otherProps}
							/>
						</Fragment>
					);
				})}
				<div className="pt-5">
					{enabled && (
						<button
							type="submit"
							className={`py-3 px-10 border bg-black rounded-lg ${isPending && "cursor-wait opacity-50"}`}
						>
			        <div className="gap-3 inline-flex">
			          {isPending ? (
			            <span className="animate-spin">
			              <Loader size={20} className="text-white" />
			            </span>
			          ) : (
			            <Send size={20} className="text-white" />
			          )}
			          <span className="text-white capitalize font-semibold">
			            {isPending ? "processing..." : "update profile"}
			          </span>
			        </div>
			      </button>
					)}
				</div>
			</form>
			{!enabled && (
				<button
					type="button"
					onClick={() => setEnabled(true)}
					className="py-3 px-10 border bg-black rounded-lg"
				>
		      <div className="gap-3 inline-flex">
		        <UserRoundPen size={20} className="text-white" />
		        <span className="text-white capitalize font-semibold">
		          edit profile
		        </span>
		      </div>
		    </button>
			)}
    </section>
	);
}