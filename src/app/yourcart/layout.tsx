import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "WoodStock your all in one  e-commerce platform",
};

export default function YourCartLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
