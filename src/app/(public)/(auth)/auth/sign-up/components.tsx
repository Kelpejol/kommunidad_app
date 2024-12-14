"use client";

import { Fragment, useState, useEffect, useActionState } from "react";

import { redirect } from "next/navigation";

import { Loader, Rocket, ArrowLeft, ArrowRight } from "lucide-react";

import { Field, FormProps, Section } from "./types";

export function Form({ action, sections }: FormProps) {
  const [tabIndex, setTabIndex] = useState <number> (0);
  const [formState, formAction, isPending] = useActionState(action, null);

  const isFirstPage = tabIndex === 0;
  const isLastPage = tabIndex === sections.length - 1;

  function goBack(): void {
    setTabIndex((tabIndex) => {
      if(!isFirstPage) {
        return tabIndex - 1;
      }

      return tabIndex;
    });
  }

  function goForward(): void {
    setTabIndex((tabIndex) => {
      if(!isLastPage) {
        return tabIndex + 1;
      }

      return tabIndex;
    });
  }

  function disableFormReset(event: any): void {
    console.log("Attempt to reset form intercepted");

    event.preventDefault();
  }

  useEffect(() => {
    if(formState) {
      const { success, message } = formState;

      alert(message);

      if(success) {
        redirect("./sign-in");
      }
    }
  }, [formState]);

  return (
    <form onReset={disableFormReset} action={formAction} className="space-y-7">
      {sections.map(({ title, fields }: Section, index: number) => (
        <Fragment key={index}>
          <fieldset className={`space-y-5 border-t border-t-gray-600 ${(index !== tabIndex) && "hidden"}`}>
            <legend className="px-3 text-center capitalize font-semibold">{title} ({tabIndex + 1}/{sections.length})</legend>
            <div className="space-y-7">
              {fields.map(({ Component, name, ...otherProps }: Field, index: number) => {
                const defaultValue = formState?.formData?.get(name) as string;
                
                return (
                  <Fragment key={index}>
                    <Component
                      name={name}
                      value={defaultValue}
                      
                      {...otherProps}
                    />
                  </Fragment>
                )
              })}
            </div>
          </fieldset>
        </Fragment>
      ))}
      <div className="pt-5 space-y-3 text-center">
        {isLastPage && (
          <button type="submit" className={`p-3 block w-full border bg-black rounded-lg ${isPending && "cursor-wait opacity-50"}`}>
            <div className="gap-3 inline-flex">
              {isPending ? (
                <span className="animate-spin">
                  <Loader size={20} className="text-white" />
                </span>
              ) : (
                <Rocket size={20} className="text-white" />
              )}
              <span className="text-white capitalize font-semibold">
                {isPending ? "processing..." : "sign up"}
              </span>
            </div>
          </button>
        )}
        {!isLastPage && (
          <button type="button" onClick={goForward} className="p-3 block w-full border bg-black rounded-lg">
            <div className="gap-3 inline-flex">
              <ArrowRight size={20} className="text-white" />
              <span className="text-white capitalize font-semibold">
                proceed
              </span>
            </div>
          </button>
        )}
        {!isFirstPage && (
          <div>
            <button type="button" onClick={goBack} className="p-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100">
              <div className="flex-none">
                <ArrowLeft size={20} className="text-black" />
              </div>
              <div className="flex-1">
                <span className="text-black capitalize font-semibold fill-gray-200">go back</span>
              </div>
            </button>
          </div>
        )}
        {/* <div>
          <Link href="./sign-up" className="inline-block">
            <span className="sentence font-semibold underline">already have an account? Sign In</span>
          </Link>
        </div> */}
      </div>
    </form>
  );
}