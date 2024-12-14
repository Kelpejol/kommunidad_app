import { Form } from "./components";
import { uploadQuestion } from "./actions";

export default function Page() {
	return (
		<Form action={uploadQuestion} />
	);
}