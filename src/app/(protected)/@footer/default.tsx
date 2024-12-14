export default function Page() {
	return (
		<footer className="py-20">
			<div className="container">
				<div className="text-center">
					<p className="sentence font-medium">
						&copy; {new Date().getFullYear()} Komunidad World. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}