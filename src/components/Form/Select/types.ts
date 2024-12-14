export type SelectProps = {
  name: string,
  title: string,
  placeholder: string,
  
  value?: string;
  disabled?: boolean;
  options?: Option[]; 
}

export type Option = {
  name: string;
  value: string;
}