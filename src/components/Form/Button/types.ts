export type ButtonProps = {
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;

  name?: string;
  title?: string;
  pending?: boolean;
  disabled?: boolean;
}