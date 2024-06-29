"use client";
import { Text } from "@bridge-the-gap/design-system";

import ArrowIcon from "../public/arrow.svg";
import ArrowLeftIcon from "../public/arrow-left.svg";

export default function BreadCrumbsArrows() {
  return (
    <div className="relative w-full h-54">
      <div className="flex items-baseline gap-[2%] mt-20">
        <Text as="p" responsive={{ sm: "baseMedium", md: "xlmedium", lg: "4xl" }} variant="4xl">
          Setup
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: "baseMedium", md: "xlmedium", lg: "4xl" }} variant="4xl">
          POC
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: "baseMedium", md: "xlmedium", lg: "4xl" }} variant="4xl">
          Outline
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: "baseMedium", md: "xlmedium", lg: "4xl" }} variant="4xl">
          Alignment
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
      </div>
      <div className="flex items-baseline gap-[3%] mt-20 ml-24">
        <Text as="p" responsive={{ sm: "baseMedium", md: "xlmedium", lg: "4xl" }} variant="4xl">
          Handover
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: "baseMedium", md: "xlmedium", lg: "4xl" }} variant="4xl">
          Adoption
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text
          as="p"
          responsive={{ sm: "baseMedium", md: "xlmedium", lg: "4xl" }}
          variant="4xl"
          className="min-w-max"
        >
          Components library
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
      </div>
    </div>
  );
}
