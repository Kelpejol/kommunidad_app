export type UploadQuestion = null | {
	message: string;
	success: boolean;
	
	formData?: Record<string, any>;
}

export type TitleBlockProps = {
	text: string;
	Icon: any;
}

export type GetUserLocationProps = {
	latitude: number;
	longitude: number;
}

export type FormProps = {
	action: (_: UploadQuestion, formData: FormData) => Promise<UploadQuestion>;
}