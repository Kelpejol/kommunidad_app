export type AboutUs = {
	link: string;
	title: string;
	description: string;
	image: {
		src: string | null;
		alt: string;
	},
}

export type HowToProps = AboutUs & {
	flipped: boolean;
}