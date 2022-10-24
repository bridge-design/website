import Header from "@components/header";
import Footer from "@components/footer";

const navItems = [
  // {
  //   name: "Services",
  //   href: "/services",
  // },
  {
    name: "Workshop",
    href: "/hands-on-workshop",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About us",
    href: "/about",
  },
];
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header navItems={navItems} />
      <main className="flex-1 max-w-full px-4 py-6 mx-auto lg:container md:px-6 md:py-12 text-light-on-background-900">
        <div className="max-w-5xl p-10 mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
