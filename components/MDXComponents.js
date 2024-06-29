import Link from "@/components/link";
// import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const MDXComponents = {
  a: Link,
  img: (props) => <img alt={props.alt || "Image"} loader={myLoader} {...props} />, // cannot use real NextImage, because it doesn't work in static export
  p: (props) => <p className="mb-2" {...props} />,
};

export default MDXComponents;
