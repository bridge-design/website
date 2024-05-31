import { LayoutBlog, LayoutCase } from "@components/layout";
import { usePathname } from "next/navigation";

export default function LayoutMdx(props) {
  const pathname = usePathname();
  
  if (/\/blog\/.+/.test(pathname)) {
    return <LayoutBlog {...props} />;
  }

  return props.children;
}
