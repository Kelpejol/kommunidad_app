"use client";

import { Option, SelectProps } from "./types";

export default function Input({ name, title, value, options, disabled, placeholder }: SelectProps) {
	return (
		<div className="space-y-2">
			{title && (
				<p className="text-left">
					<span className="sentence font-semibold">{title}</span>
				</p>
			)}
			<select
				name={name}
				disabled={disabled}
				defaultValue={value}
				className={`p-3 w-full block border capitalize rounded-lg bg-transparent ${disabled && "opacity-50 cursor-not-allowed"}`}
			>
				<option value="">{placeholder}</option>
				{options?.map(({ name, value }: Option, index: number) => (
					<option key={index} value={value}>{name}</option>
				))}
			</select>
		</div>
	);
}