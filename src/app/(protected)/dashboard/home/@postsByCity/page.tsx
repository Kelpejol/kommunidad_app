"use server";

import { Fragment } from "react";

import { Post } from "./components";
import { PostProps } from "./types";
import { getPosts } from "./actions";

export default async function Page() {
	const posts = await getPosts();

	return Array.isArray(posts) && posts.map((postProp: PostProps, index: number) => (
		<Fragment key={index}>
			<Post {...postProp} />
		</Fragment>
	));
}