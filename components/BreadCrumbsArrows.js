import React from "react";
import ArrowIcon from "../public/arrow.svg";
import ArrowLeftIcon from "../public/arrow-left.svg";
import { Text } from "@bridge-the-gap/design-system";

export default function BreadCrumbsArrows() {
  return (
    <div className="relative w-full h-54">
      <div className="flex items-baseline gap-[2%] mt-20">
        <Text as="p" responsive={true} variant="4xl" className="">
          Setup
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={true} variant="4xl" className="">
          POC
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={true} variant="4xl" className="">
          Outline
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={true} variant="4xl" className="">
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
        <Text as="p" responsive={true} variant="4xl" className="">
          Handover
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={true} variant="4xl" className="">
          Adoption
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={true} variant="4xl" className="min-w-max">
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
