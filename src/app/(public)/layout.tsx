import { LayoutProps } from "./types";

export default function Layout({ header, footer, children }: LayoutProps) {
  return (
    <body lang="en">
      {header}
      {children}
      {footer}
    </body>
  );
}