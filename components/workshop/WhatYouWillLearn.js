import { Text } from "@bridge-the-gap/design-system";

import SectionTitle from "./SectionTitle";

export default function WhyAttend() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto md:flex-row mt-28">
      <SectionTitle
        icon="Education32"
        className="justify-start flex-shrink-0 w-full md:flex-col md:w-2/5"
        iconClassName="pr-4 mb-4 md:mr-0"
      >
        What you <span className="md:block">will learn?</span>
      </SectionTitle>
      {/* <div className="flex items-start justify-start flex-shrink-0 w-full md:flex-col md:w-2/5">
        <Icon name="Education32" className="pr-4 mb-4 mr-6 md:mr-0" />
        <Text variant="6Xl" as="h2">
          What you <span className="md:block">will learn?</span>
        </Text>
      </div> */}
      <Text variant="xlMedium" as="div" className="mt-16 md:mt-0">
        <p className="mb-6">
          This workshop helps you learn and practice design systems working in a team. You can join
          as a designer or developer.
        </p>
        <p className="mb-6">
          The designers define visual design language and Figma components. At the same time, the
          developers create the components with React. You practice iterative component-driven
          design and development and create documentation along with making the product. The
          exercise contains managing collaborative updates and keeping the code in sync with the
          design reality.
        </p>
        <p>
          By the end of the workshop, each team has a ready-to-use component library, an end product
          built out of that, and a tuned process to ensure smooth updates.
        </p>
      </Text>
    </div>
  );
}
