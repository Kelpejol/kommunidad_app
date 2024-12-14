import { LayoutProps } from "./types";

export default function Layout({ createPost, postsByUserID }: LayoutProps) {
	return (
		<section className="space-y-16">
			{createPost}
			{postsByUserID}
		</section>
	);
}