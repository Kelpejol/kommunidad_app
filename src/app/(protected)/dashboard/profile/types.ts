import { InputProps } from  "@/components/Form/Input/types";
import { SelectProps } from  "@/components/Form/Select/types";

export type GetUserData = null | {
	[key: string]: any;
}

export type Field = any;

export type FormProps = {
  fields: Field[];
  data: GetUserData;

  action: (_: UpdateUserData, formData: FormData) => Promise<UpdateUserData>;
}

export type UpdateUserData = null | {
  message: string;
  success: boolean;
}