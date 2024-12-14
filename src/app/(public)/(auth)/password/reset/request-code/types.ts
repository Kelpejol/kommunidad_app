import { InputProps } from  "@/components/Form/Input/types";

export type RequestCode = null | {
  message: string;
  success: boolean;
}

export type Field = InputProps & {
  Component: React.FC<InputProps>;
}

export type FormProps = {
  fields: Field[];

  action: (_: RequestCode, formData: FormData) => Promise<RequestCode>;
}