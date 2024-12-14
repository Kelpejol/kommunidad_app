import { InputProps } from  "@/components/Form/Input/types";

export type SignIn = null | {
  message: string;
  success: boolean;

  formData?: FormData;
}

export type Field = InputProps & {
  Component: React.FC<InputProps>;
}

export type FormProps = {
  fields: Field[];

  action: (_: SignIn, formData: FormData) => Promise<SignIn>;
}