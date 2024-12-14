import { Metadata } from "next";

import { LayoutProps } from "./types";

import "@/css/globals.css";

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}

export const metadata: Metadata = {
  title: "Fuzzy Community",
  description: "Powered by Komunidad World",
};