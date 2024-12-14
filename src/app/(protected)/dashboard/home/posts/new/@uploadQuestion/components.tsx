"use client";

import { redirect } from "next/navigation";
import { useState, useEffect, useActionState } from "react";

import { Send, MapPin, Loader, MessageCircleQuestion } from "lucide-react";

import { getUserLocation } from "./actions";
import { FormProps, TitleBlockProps } from "./types";

export function Form({ action }: FormProps) {
	const [location, setLocation] = useState <string> ("");

	const [formState, formAction, isPending] = useActionState(action, null);

	useEffect(() => {
		navigator
		?.geolocation
		?.getCurrentPosition(({ coords: { latitude, longitude }}: GeolocationPosition) => {
			getUserLocation({ latitude, longitude })
			.then((location) => {
				if(typeof location === "string") {
					setLocation(location);
				}
			});
		});
	}, []);

	useEffect(() => {
		if(formState) {
			const { success, message } = formState;

			alert(message);

			if(success) {
				redirect("../../questions");
			}
		}
	}, [formState])

	return (
		<form action={formAction} className="space-y-5">
			<div className="p-5 shadow bg-white rounded-lg">
				<div className="space-y-3">
					<TitleBlock
						text="your location"
						Icon={MapPin}
					/>
					<p className="pl-3 block w-full border-l-4 sentence outline-none text-gray-600">
						{location || formState?.formData?.location}
					</p>
				</div>
			</div>
			<div className="p-5 shadow bg-white rounded-lg">
				<div className="space-y-3">
					<TitleBlock
						text="ask question"
						Icon={MessageCircleQuestion}
					/>
					<input
						name="city"
						type="hidden"
						defaultValue={location}
					/>
					<textarea
						rows={3}
						name="question"
						placeholder="type question here..."
						defaultValue={formState?.formData?.city || ""}
						className="p-3 block w-full border rounded-lg resize-none capitalize text-gray-600"
					></textarea>
					<button type="submit" className={`py-3 px-10 border bg-black rounded-lg ${isPending && "cursor-wait opacity-50"}`}>
	          <div className="gap-3 inline-flex">
	            {isPending ? (
	              <span className="animate-spin">
	                <Loader size={20} className="text-white" />
	              </span>
	            ) : (
	              <Send size={20} className="text-white" />
	            )}
	            <span className="text-white capitalize font-semibold">
	              {isPending ? "processing..." : "upload question"}
	            </span>
	          </div>
	        </button>
				</div>
			</div>
		</form>
	);
}

export function TitleBlock({ Icon, text }: TitleBlockProps) {
	return (
		<div className="gap-3 inline-flex items-center">
			<div className="flex-none">
				<Icon
					size={20}
					className="text-black"
				/>
			</div>
			<div className="flex-none">
				<span className="text-black sentence font-semibold fill-gray-200">
					{text}
				</span>
			</div>
		</div>
	);
}