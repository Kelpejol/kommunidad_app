"use client";

import { useState } from "react";

import { InputProps } from "./types";

export default function Input({ name, type, title, value, disabled, placeholder, canBeVisible }: InputProps) {
	const [seePassword, setSeePassword] = useState <boolean> (false);

	function toggleInputType(): void {
		setSeePassword((seePassword) => !seePassword);
	}

	return (
		<div className="space-y-2">
			{title && (
				<p className="text-left">
					<span className="sentence font-semibold">{title}</span>
				</p>
			)}
			<input
				name={name}
				disabled={disabled}
				defaultValue={value}
				placeholder={placeholder}
				type={seePassword ? "text" : type}
				className={`p-3 w-full block border rounded-lg ${disabled && "opacity-50 cursor-not-allowed"}`}
			/>
			{canBeVisible && (
				<div className="text-right">
					<button type="button" onClick={toggleInputType}>
						<span className="sentence font-semibold underline hover:decoration-dotted">see password</span>
					</button>
				</div>
			)}
		</div>
	);
}