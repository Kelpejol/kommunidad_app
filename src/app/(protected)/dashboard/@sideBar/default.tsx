"use client";

import Link from "next/link";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

import { routes } from "./props";
import { RouteProps, SectionProps } from "./types";

export default function Default() {
  const pathname = usePathname();
  
  return (
    <nav className="pb-20">
      <div className="divide-y space-y-5">
        {routes.map(({ title, routes }: SectionProps, index: number) => (
          <article key={index} className="py-5 space-y-3">
            <p title={title} className="font-semibold capitalize text-gray-600">{title}</p>
            <div className="space-y-3">
              {routes.map(({ name, href, theme, Icon }: RouteProps, index: number) => {
                const currentRoute = pathname.startsWith(href);

                return (
                  <Link href={href} key={index} className={twMerge(
                    "p-3 flex gap-5 items-center rounded-lg transition",
                    currentRoute ? "bg-white shadow" : "hover:bg-white"
                  )}>
                    <div className="flex-none">
                      <p className="text-black">
                        <Icon size={20} className="fill-gray-200" />
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-black">
                        <span className="capitalize font-semibold">{name}</span>
                      </p>
                    </div>
                    {/*<div className="flex-none">
                      <p className="px-3 bg-black rounded-lg">
                        <span className="text-xs font-bold text-white">3</span>
                      </p>
                    </div>*/}
                  </Link>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </nav>
  );
}