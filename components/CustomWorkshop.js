"use client";
import { Button, Text } from "@bridge-the-gap/design-system";
import SectionTitle from "@/components/SectionTitle";

export default function CustomWorkshop() {
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <SectionTitle icon="ChartMarimekko">Want a custom workshop for your team?</SectionTitle>
      <Text variant="xlMedium" className="flex mt-16">
        Need a custom version? We can tailor this workshop for your company. When focused on your
        product and taking into account your team shape, the workshop outcome is not only a training
        session but also your design system&apos;s kick-off. We&apos;ll walk through the design
        system process, how to get started and how to fit it into your existing design processes.
        There will be an opportunity for the team to discuss questions they might have about
        implementing a design system.
      </Text>
      <Button
        className="justify-center w-64 mt-8"
        label="Let's talk"
        as="a"
        href="/contact"
        target="_blank"
        rel="noopener"
      />
    </div>
  );
}
