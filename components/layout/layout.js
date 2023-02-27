import Header from "@components/header";
import Footer from "@components/footer";

const navItems = [
  {
    name: "Showcases",
    href: "/showcases",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "mailto:mail@bridge-the-gap.dev",
  },
];

export default function Layout({ children }) {
  return (
    <div className="container flex flex-col justify-between min-h-screen overflow-hidden pt-11">
      <Header navItems={navItems} />
      <main className="max-w-full text-light-on-background-900">{children}</main>
      <Footer />
    </div>
  );
}
