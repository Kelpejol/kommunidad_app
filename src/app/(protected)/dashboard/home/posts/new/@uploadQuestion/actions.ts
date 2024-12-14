"use server";

import { getToken } from "@/libs/token";
import { baseURL } from "@/libs/config";

import { UploadQuestion, GetUserLocationProps } from "./types";

export async function uploadQuestion(_: UploadQuestion, formData: FormData): Promise<UploadQuestion> {
	const token = await getToken();

	const formObject = {
		city: formData.get("city"),
		question: formData.get("question"),
	};

	try {
		const url = new URL("/api/user/uploadQuestion", baseURL);

		const options: RequestInit = {
      method: "post",
      body: JSON.stringify(formObject),
      headers: {
      	"Authorization": `Bearer ${token}`,
        "content-type": "application/json"
      }
    }

    const request = await fetch(url, options);
    const response = await request.json();

    if(response.status === 200) {
      return {
        success: true,
        message: "Question uploaded successfully"
      }
    }

    return {
    	success: false,
    	formData: formObject,
    	message: response.message,
    }
	}
	catch(error: any) {
		return {
    	success: false,
    	formData: formObject,
    	message: "An error occured, please try again",
    }
	}
}

export async function getUserLocation({ latitude, longitude }: GetUserLocationProps): Promise<null | string> {
	const geocodingAPIKey = process.env.GEOCODING_API_KEY;

	try {
		const request = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${geocodingAPIKey}`);
		const response = await request.json();

		if(request.status === 200) {
			const { address: { city, state, country }} = response;

			return `${city}, ${state}. ${country}`;
		}

		return null;
	}
	catch(error: any) {
		return null;
	}
}