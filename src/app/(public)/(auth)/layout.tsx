import { LayoutProps } from "./types"

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="max-w-md mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}