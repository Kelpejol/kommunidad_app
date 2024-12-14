"use client";

import { useEffect, useActionState, Fragment } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Loader, LogIn } from "lucide-react";

import { Field, FormProps } from "./types";

export function Form({ action, fields }: FormProps) {
  const router = useRouter();

  const [formState, formAction, isPending] = useActionState(action, null)

  useEffect(() => {
    if(formState) {
      const { success, message } = formState;

      alert(message);

      if(success) {
        router.push("/dashboard");
      }
    }
  }, [router, formState]);

  return (
    <form action={formAction} className="space-y-7">
      {fields.map(({ Component, name,...otherProps }: Field, index: number) => {
        const cacheExemptions: string[] = ["password"];
        
        const defaultValue: string = (
          !cacheExemptions.includes(name)
          ? formState?.formData?.get(name) as string
          : ""
        );

        return (
          <Fragment key={index}>
            <Component
              name={name}
              value={defaultValue}

              {...otherProps}
            />
          </Fragment>
        );
      })}
      <div className="pt-5 space-y-3 text-center">
        <button type="submit" className={`p-3 block w-full border bg-black rounded-lg ${isPending && "cursor-wait opacity-50"}`}>
          <div className="gap-3 inline-flex">
            {isPending ? (
              <span className="animate-spin">
                <Loader size={20} className="text-white" />
              </span>
            ) : (
              <LogIn size={20} className="text-white" />
            )}
            <span className="text-white capitalize font-semibold">
              {isPending ? "processing..." : "sign in"}
            </span>
          </div>
        </button>
        <div>
          <Link href="./sign-up" className="inline-block">
            <span className="sentence font-semibold underline">don&apos;t have an account? Sign Up</span>
          </Link>
        </div>
        <div>
          <Link href="../password/reset" className="inline-block">
            <span className="sentence font-semibold underline">forgot password</span>
          </Link>
        </div>
      </div>
    </form>
  );
}