import { Text, CtaLink } from "@bridge-the-gap/design-system";
import Link from "@components/link";

const Contact = () => {
  return (
    <div className="text-center">
      <CtaLink href="mailto:mail@bridge-the-gap.dev" target="_blank" as={Link} underline>
        mail@bridge-the-gap.dev
      </CtaLink>
    </div>
  );
};

export default Contact;
