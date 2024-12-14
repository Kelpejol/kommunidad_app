"use client";

import { ButtonProps } from "./types";

export default function Button({ name, type, title, pending, disabled, children, ...otherProps }: ButtonProps) {
	return (
		<button
			name={name}
			type={type}
			disabled={disabled}
			className={`py-4 px-3 w-full block bg-black rounded ring-black ring-offset-2 transition hover:ring-2 focus:ring-2 ${disabled && "opacity-50 cursor-not-allowed"} ${pending && "opacity-50 cursor-wait"}`} {...otherProps}
		>
			<span className="font-bold text-white capitalize">
				{pending ? "processing..." : (title || children)}
			</span>
		</button>
	);
}