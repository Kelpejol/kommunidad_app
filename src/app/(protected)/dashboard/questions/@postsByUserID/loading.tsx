import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
	return (
		<article className="p-5 bg-white shadow rounded">
			<div className="space-y-5">
				<div className="flex gap-10 items-center justify-between">
					<div className="flex-1">
						<Skeleton variant="text" width="60%" height="18px" />
					</div>
					<div className="flex-none">
						<Skeleton variant="text" width="20px" height="20px" />
					</div>
				</div>
				<div className="space-y-4">
					<Skeleton variant="text" width="100%" height="25px" />
					<div className="pl-3 space-y-2 border-l">
						{Array(3).fill(null).map((_: null, index: number) => (
							<div key={index} className="flex gap-3">
								<div className="flex-none">
									<Skeleton variant="text" width="100px" height="18px" />
								</div>
								<div className="flex-1">
									<Skeleton variant="text" width="100%" height="18px" />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex gap-10 items-center justify-between">
					<div className="flex-none">
						<div className="flex">
							<div className="flex-none">
								<Skeleton variant="text" width="20px" height="20px" />
							</div>
							<div className="flex-none">
								<Skeleton variant="text" width="93px" height="18px" />
							</div>
						</div>
					</div>
					<div className="flex-none">
						<div className="flex gap-5 items-center">
							{Array(3).fill(null).map((_: null, index: number) => (
								<div key={index} className="flex-none">
									<Skeleton variant="text" width="32px" height="23px" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}