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
    name: "Workshop",
    href: "/hands-on-workshop",
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
    <div className="container flex flex-col min-h-screen overflow-hidden">
      <Header navItems={navItems} />
      <main className="flex-1 max-w-full text-light-on-background-900 ml-28">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
