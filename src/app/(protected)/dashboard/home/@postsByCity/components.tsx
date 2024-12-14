"use client";

import Link from "next/link";
import { revalidateTag } from "next/cache";

import { useState, Fragment, useEffect, useActionState } from "react";

import { 
	MapPin, Loader, CircleX, Ellipsis, ThumbsUp, ThumbsDown, SendHorizontal, MessageSquareText
} from "lucide-react";

import { Comment, PostProps } from "./types";
import { upVote, downVote, postComment } from "./actions";

export function Post(props: PostProps) {
	const { id, user, city, user_id, comments, question, updated_at } = props;

	const Top = () => {
		const date = new Date(updated_at);

		return (
			<div className="flex gap-10 items-center justify-between">
				<div className="flex-1">
					<p className="sentence text-slate-600">
						<span className="one-line">
							posted on: {date.toDateString()} | {date.toLocaleTimeString()}
						</span>
					</p>
				</div>
				<div className="flex-none">
					<button>
						<Ellipsis size={20} className="fill-gray-300" />
					</button>
				</div>
			</div>
		);
	}

	const Middle = () => {
		comments.length = 3;

		return (
			<div className="space-y-4">
				<h3 className="text-xl sentence one-line font-semibold">
					{question}
				</h3>
				<div className="pl-3 space-y-2 border-l-4 border-gray-600">
					{comments.map(({ id, user, comment }: Comment) => (
						<p key={id} className="one-line">
							<Link href="" className="italic underline capitalize font-semibold">
								{user.f_name} {user.s_name}:
							</Link>
							<span className="sentence">
								&nbsp; {comment}
							</span>
						</p>
					))}
				</div>
			</div>
		);
	}

	const Bottom = () => {
		const [commenting, setCommenting] = useState <boolean> (false);
		const [formState, formAction, isPending] = useActionState(postComment, null);

		function toggleCommenting(): void {
			setCommenting((commenting) => !commenting);
		}

		async function interaction(option: boolean, questionID: number): Promise<void> {
			const action = option ? upVote : downVote;
			const reaction = await action(String(questionID));

			alert(reaction?.message);
		}

		useEffect(() => {
			if(formState) {
				alert(formState?.message);
			}
		}, [formState]);
		
		return (
			<Fragment>
				<div className="flex gap-10 items-center justify-between">
					<div className="flex-1">
						<button disabled className="gap-2 inline-flex">
							<MapPin size={20} className="fill-gray-300" />
							<span className="italic one-line capitalize font-semibold">
								{city}
							</span>
						</button>
					</div>
					<div className="flex-none">
						<div className="flex gap-5 items-center">
							<div className="flex-none">
								<button onClick={interaction.bind(null, true, id)} className="gap-1 inline-flex">
									<ThumbsUp size={20} className="fill-gray-300" />
									<span className="italic capitalize font-semibold">
										0
									</span>
								</button>
							</div>
							<div className="flex-none">
								<button onClick={interaction.bind(null, false, id)} className="gap-1 inline-flex">
									<ThumbsDown size={20} className="fill-gray-300" />
									<span className="italic capitalize font-semibold">
										0
									</span>
								</button>
							</div>
							<div className="flex-none">
								<button onClick={toggleCommenting} className="gap-1 inline-flex">
									<MessageSquareText size={20} className="fill-gray-300" />
									<span className="italic capitalize font-semibold">
										0
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				{commenting && (
					isPending ? (
						<div className="p-5 border text-center opacity-50 rounded-lg bg-gray-200">
							<button
								disabled
								type="button"
								className={`p-3 block w-full border bg-black rounded-lg ${isPending && "cursor-wait opacity-50"}`}
							>
			          <div className="gap-3 inline-flex">
			            <span className="animate-spin">
		                <Loader size={20} className="text-white" />
		              </span>
			            <span className="text-white capitalize font-semibold">
			            	processing...
			            </span>
			          </div>
			        </button>
						</div>
					) : (
						<form action={formAction} className="flex gap-5 items-start">
							<div className="flex-1">
								<input
									type="hidden"
									defaultValue={id}
									name="question_id"
								/>
								<textarea
									rows={2}
									name="comment"
									placeholder="Type comment here..."
									className="p-3 block w-full border resize-none rounded-lg"
								/>
							</div>
							<div className="flex-none">
								<button type="submit" title="Post comment" className="py-2">
									<SendHorizontal size={20} className="fill-blue-300" />
								</button>
							</div>
						</form>
					)
				)}
			</Fragment>
		);
	}

	return (
		<article className="p-5 bg-white shadow rounded-lg">
			<div className="space-y-5">
				<Top />
				<Middle />
				<Bottom />
			</div>
		</article>
	);
}