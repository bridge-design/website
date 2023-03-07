import { useState } from "react";
import { Text, CtaLink } from "@bridge-the-gap/design-system";
import Link from "@components/link";
import CopyText from "../../public/copy-doc.svg";

const Contact = () => {
  const [copyToClipboard, setCopyToClipboard] = useState("");
  return (
    <div className="flex items-center justify-center gap-5 text-center">
      <CtaLink href="mailto:mail@bridge-the-gap.dev" as={Link} underline>
        mail@bridge-the-gap.dev
      </CtaLink>
      <CopyText
        width="20"
        height="20"
        fill="currentColor"
        className={`mb-3 cursor-pointer text-primary-700 hover:text-primary-400 ${
          copyToClipboard ? "text-gray-400 hover:text-gray-400" : ""
        }`}
        title="CopyText"
        onClick={() => {
          navigator.clipboard.writeText("mail@bridge-the-gap.dev");
          setCopyToClipboard("Copied!");
        }}
      />
    </div>
  );
};

export default Contact;
