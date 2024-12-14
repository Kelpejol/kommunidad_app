"use server";

import { revalidateTag } from "next/cache";

import { baseURL } from "@/libs/config";
import { getToken } from "@/libs/token";

import { GetPosts, PostProps, VoteAction, PostComment } from "./types";

export async function getPosts(): Promise<GetPosts> {
	const token = await getToken();

	try {
		const url = new URL("/api/user/fetchQuestionsByCity/ife", baseURL);

		const options: RequestInit = {
      method: "get",
      headers: {
      	"Authorization": `Bearer ${token}`
      },
      next: {
      	tags: ["post-comment"]
      }
    }

    const request = await fetch(url, options);
    const response = await request.json();

    if(response.status === 200) {
      return response.data.map(({ comments, ...otherProps }: PostProps) => ({
      	...otherProps,
      	comments: comments.reverse()
      }));
    }

    return null;
	}
	catch(error: any) {
		console.log({ error });

		return null;
	}
}

export async function postComment(_: PostComment, formData: FormData): Promise<PostComment> {
	const token = await getToken();

	const payload = JSON.stringify({
		comment: formData.get("comment"),
		question_id: formData.get("question_id"),
	});

	try {
		const url = new URL("/api/user/uploadComment", baseURL);
		const options: RequestInit = {
      method: "post",
      body: payload,
      headers: {
      	"Content-Type": "application/json",
      	"Authorization": `Bearer ${token}`,
      }
    }

		const request = await fetch(url, options);
		const response = await request.json();

		if(response?.status === 201) {
			revalidateTag("post-comment");

			return {
				success: true,
				message: "Comment uploaded!"
			}
		}

		return {
			formData,
			success: false,
			message: response?.message,
		}
	}
	catch(error: any) {
		console.log(error);

		return {
			formData,
			success: false,
			message: "An error occured, please try again",
		}
	}
}

export async function upVote(questionID: string): Promise<VoteAction> {
	const token = await getToken();

	const payload = JSON.stringify({
		question_id: questionID
	});

	try {
		const url = new URL("/api/user/upVote", baseURL);
		const options: RequestInit = {
			method: "post",
			body: payload,
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		}

		const request = await fetch(url, options);
		const response = await request.json();

		if(response.status === 201) {
			revalidateTag("post-comment");

			return {
				success: true,
				message: "Upvote successful"
			}
		}

		return {
			success: false,
			message: response?.message
		}
	}
	catch(error: any) {
		console.log({ error });

		return {
			success: false,
			message: "Failed to upvote question"
		}
	}
}

export async function downVote(questionID: string): Promise<VoteAction> {
	const token = await getToken();

	const payload = JSON.stringify({
		email: "sss@example.com",
		f_name: "sss",
		question_id: questionID
	});

	try {
		const url = new URL("/api/user/downVote", baseURL);
		const options: RequestInit = {
			method: "post",
			body: payload,
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		}

		const request = await fetch(url, options);
		const response = await request.json();

		if(response.status === 201) {
			revalidateTag("post-comment");

			return {
				success: true,
				message: "Downvote successful"
			}
		}

		return {
			success: false,
			message: response?.message
		}
	}
	catch(error: any) {
		console.log({ error });

		return {
			success: false,
			message: "Failed to downvote question"
		}
	}
}