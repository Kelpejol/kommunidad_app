"use client";

import { Mail, Loader } from "lucide-react";

import { useEffect, useActionState } from "react";
import { redirect, useRouter } from "next/navigation";

import { FormProps } from "./types";

export function Form({ action, fields }: FormProps) {
	const router = useRouter();

	const [formState, formAction, isPending] = useActionState(action, null);

	function goBack(): void {
		router.back();
	}

	useEffect(() => {
		if(formState) {
			const { success, message } = formState;

			alert(message);

			if(success) {
				redirect("./verify-code");
			}
		}
	}, [formState]);

	return (
		<form action={formAction} className="space-y-7">
			{fields.map(({ Component, ...otherProps }, index) => (
				<Component key={index} {...otherProps} />
			))}
			<div className="pt-5 space-y-3 text-center">
				<button type="submit" className={`p-3 block w-full border bg-black rounded-lg ${isPending && "cursor-wait opacity-50"}`}>
          <div className="gap-3 inline-flex">
            {isPending ? (
              <span className="animate-spin">
                <Loader size={20} className="text-white" />
              </span>
            ) : (
              <Mail size={20} className="text-white" />
            )}
            <span className="text-white capitalize font-semibold">
              {isPending ? "processing..." : "send code"}
            </span>
          </div>
        </button>
				<div>
					<button type="button" onClick={goBack}>
						<span className="underline sentence font-semibold">
							go back
						</span>
					</button>
				</div>
			</div>
		</form>
	);
}