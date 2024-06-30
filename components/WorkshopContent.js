import { Timetable } from "@bridge-the-gap/design-system";

import localTime from "@/components/local-time";
import SectionTitle from "@/components/SectionTitle";

export default function WorkshopContent() {
  const timetableDay1 = [
    {
      color: "bg-light-on-background-900",
      description: "Say Hi 👋",
      name: "Introduction",
      time: localTime(9, 9, "%start%:00-%end%:30"),
    },
    {
      color: "bg-light-on-background-900",
      description: "Icebreaker exercise",
      name: "Teams",
      time: localTime(9, 10, "%start%:30-%end%:00"),
    },
    {
      color: "bg-light-on-background-900",
      description: "Setting up Figma project and project repository",
      name: "Design and process",
      time: localTime(10, 10, "%start%:00-%end%:40"),
    },
    {
      color: "bg-light-on-background-900",
      description: "UI inventory and scoping",
      name: "Design and process",
      time: localTime(10, 11, "%start%:40-%end%:15"),
    },
    {
      color: "bg-light-on-background-900",
      description: "",
      name: "Lunch break",
      time: localTime(11, 11, "%start%:15-%end%:45"),
    },
    {
      color: "bg-light-on-background-900",
      description: "UI inventory discussion",
      name: "Design and process",
      time: localTime(11, 12, "%start%:45-%end%:00"),
    },

    {
      color: "bg-light-on-background-900",
      description: "Design tokens foundation. Intro to visual regression testing",
      name: "Designing and building the library",
      time: localTime(12, 12, "%start%:00-%end%:30"),
    },
    {
      color: "bg-light-on-background-900",
      description: "Hands-on practice",
      name: "Designing and building the library",
      time: localTime(12, 13, "%start%:30-%end%:00"),
    },
  ];
  const timetableDay2 = [
    {
      color: "bg-light-on-background-900",
      description: "Coding and documenting the components. New design challenge",
      name: "Designing and building the library",
      time: localTime(9, 10, "%start%:00-%end%:45"),
    },
    {
      color: "bg-light-on-background-900",
      description: "Versioning and release. Documenting components in ZeroHeight",
      name: "Design system lifecycle",
      time: localTime(10, 11, "%start%:45-%end%:00"),
    },

    {
      color: "bg-light-on-background-900",
      description: "",
      name: "LUNCH BREAK",
      time: localTime(11, 11, "%start%:00-%end%:30"),
    },
    {
      color: "bg-light-on-background-900",
      description: "Hands-on update and release",
      name: "Design system lifecycle",
      time: localTime(11, 12, "%start%:30-%end%:30"),
    },
    {
      color: "bg-light-on-background-900",
      description: "Q&A session and discussion",
      name: "Recap",
      time: localTime(12, 13, "%start%:30-%end%:00"),
    },
  ];
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <SectionTitle icon="TableOfContents32">Workshop content</SectionTitle>
      <Timetable className="w-full mt-16" data={timetableDay1} header="Day 1" />
      <Timetable className="w-full mt-16" data={timetableDay2} header="Day 2" />
    </div>
  );
}
