export type Base = {
	id: number;
	user: User;
	user_id: number;
	created_at: string;
	updated_at: string;
}

export type User = {
	[key: string]: null | number | string;
}

export type Comment = Base & {
	comment: string;
	question_id: number;
}

export type PostProps = Base & {
	city: string;
	question: string;
	comments: Comment[];
}

export type LayoutProps = {
	children: React.ReactNode;
}

export type PostComment = null | {
	message: string;
	success: boolean;

	formData?: FormData;
}

export type VoteAction = {
	message: string;
	success: boolean;
};

export type GetPosts = null | PostProps;