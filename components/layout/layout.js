import Footer from "@components/footer";
import Header from "@components/header";

const navItems = [
  {
    name: "Case studies",
    href: "/case-studies",
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
    href: "/contact",
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
