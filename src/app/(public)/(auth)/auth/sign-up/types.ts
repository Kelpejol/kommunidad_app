import { InputProps } from  "@/components/Form/Input/types";
import { SelectProps } from  "@/components/Form/Select/types";

export type SignUp = null | {
  message: string;
  success: boolean;
  
  formData?: FormData;
}

export type Field = (InputProps | SelectProps) & {
  Component: React.FC<InputProps | SelectProps>;
}

export type Section = {
  title: string;
  fields: Field[];
}

export type FormProps = {
  sections: Section[];

  action: (_: SignUp, formData: FormData) => Promise<SignUp>;
}