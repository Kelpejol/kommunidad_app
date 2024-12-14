"use client";

import Link from "next/link";

import { Fragment } from "react";

import { phrases } from "./props";

export function PhraseList() {
  return (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      {phrases.map((phrase: string, index: number) => (
        <Fragment key={index}>
          <Link href={`/search?query=${phrase.toLowerCase()}`}>
            <div className="py-2 px-4 border rounded-full border-slate-400">
              <span className="text-sm sentence font-semibold text-slate-600">{phrase}</span>
            </div>
          </Link>
        </Fragment>
      ))}
    </div>
  );
}