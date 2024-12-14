export type SectionProps = {
  title: string;
  routes: RouteProps[];
};

export type RouteProps = {
  Icon: any;
  name: string;
  href: string;
  theme: string;
}