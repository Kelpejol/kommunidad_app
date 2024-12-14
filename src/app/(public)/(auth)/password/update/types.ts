import { InputProps } from  "@/components/Form/Input/types";

export type UpdatePassword = null | {
  message: string;
  success: boolean;
}

export type Field = InputProps & {
  Component: React.FC<InputProps>;
}

export type FormProps = {
  fields: Field[];

  action: (_: UpdatePassword, formData: FormData) => Promise<UpdatePassword>;
}