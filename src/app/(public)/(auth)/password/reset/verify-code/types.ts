import { InputProps } from  "@/components/Form/Input/types";

export type VerifyCode = null | {
  message: string;
  success: boolean;
}

export type Field = InputProps & {
  Component: React.FC<InputProps>;
}

export type FormProps = {
  fields: Field[];

  action: (_: VerifyCode, formData: FormData) => Promise<VerifyCode>;
}