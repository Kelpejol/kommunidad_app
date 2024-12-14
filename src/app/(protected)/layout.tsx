import { LayoutProps } from "./types";

export default function Layout({ header, footer, children }: LayoutProps) {
	return (
		<body className="bg-gray-200">
			{header}
			{children}
			{footer}
		</body>
	);
}