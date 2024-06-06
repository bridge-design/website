import { Text } from "@bridge-the-gap/design-system";
import Link from "@components/link";
import PreCode from "@components/PreCode";
import TableComponent from "@components/TableComponent";

const Showcases = () => {
  return (
    <div className="w-full">
      <Text as="h1" variant="7xl" className="max-w-[1000px] text-center mt-48 mx-auto">
        Increasing Design System quality and adoption by proper stakeholder management
      </Text>
      <div className="inline-flex justify-center w-full gap-1 mt-10">
        <Text as="p" variant="xl">
          with
        </Text>
        <Link href="https://youtu.be/8u032Qq4aV4" className="underline">
          <Text as="span" variant="xl">
            Varya Stepanova
          </Text>
        </Link>
      </div>
      <div className=" max-w-[772px] mx-auto w-full">
        <iframe
          width="772"
          height="434"
          src="https://www.youtube.com/embed/8u032Qq4aV4?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full mt-32"
        ></iframe>
        <Text as="p" variant="2xl" className="mt-8">
          A self-paced, get-right-down-to-it online video course for web designers and developers
          who want to start creating more accessible websites and applications today
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          By default, Tailwind removes all of the default browser styling from paragraphs, headings,
          lists and more. This ends up being really useful for building application UIs because you
          spend less time undoing user-agent styles, but when you really are just trying to style
          some content that came from a rich-text editor in a CMS or a markdown file, it can be
          surprising and unintuitive.
        </Text>
        <div className="max-w-2xl pl-4 my-6 border-l-2 border-light-on-background-500">
          <Text as="i" variant="lgItalic">
            “Why is Tailwind removing the default styles on my h1 elements? How do I disable this?
            What do you mean I lose all the other base styles too?
          </Text>
        </div>
        <Text as="p" variant="lg">
          We hear you, but we&apos;re not convinced that simply disabling our base styles is what
          you really want. You don&apos;t want to have to remove annoying margins every time you use
          a p element in a piece of your dashboard UI. And I doubt you really want your blog posts
          to use the user-agent styles either — you want them to look awesome, not awful.
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          The{" "}
          <span className="text-lgMedium font-lgMedium tracking-lgMedium leading-lgMedium">
            `@tailwindcss/typography`
          </span>{" "}
          plugin is our attempt to give you what you actually want, without any of the downsides of
          doing something stupid like disabling our base styles.
        </Text>
        <PreCode />
        <Text as="p" variant="lg">
          Night Owl them for more information about how to use the plugin and the features it
          includes,{" "}
          <Link
            href="https://play.tailwindcss.com/uj1vGACRJA?layout=preview"
            className="underline text-lgMedium font-lgMedium tracking-lgMedium leading-lgMedium"
          >
            read the documentation
          </Link>
          .
        </Text>
        <div className="w-full border-b my-14 border-light-on-background-300"></div>
        <Text as="h1" variant="3XlBold">
          What to expect from here on out
        </Text>
        <Text as="p" variant="lg" className="mt-10">
          What follows from here is just a bunch of absolute nonsense I&apos;ve written to dogfood
          the plugin itself. It includes every sensible typographic element I could think of, like{" "}
          <span className="text-lgMedium font-lgMedium tracking-lgMedium leading-lgMedium">
            bold text
          </span>
          , unordered lists, ordered lists, code blocks, block quotes, and even italics.
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          It&apos;s important to cover all of these use cases for a few reasons:
        </Text>
        <Text variant="lg" className="mt-6">
          <ol className="pl-6 list-decimal">
            <li>We want everything to look good out of the box.</li>
            <li>Really just the first reason, that&apos;s the whole point of the plugin.</li>
            <li>
              Here&apos;s a third pretend reason though a list with three items looks more realistic
              than a list with two items.
            </li>
          </ol>
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          Now we&apos;re going to try out another header style.
        </Text>
        <Text as="h1" variant="2xlMedium" className="mt-9">
          Typography should be easy
        </Text>
        <Text as="p" variant="lg" className="mt-4">
          So that&apos;s a header for you — with any luck if we&apos;ve done our job correctly that
          will look pretty reasonable.
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          Something a wise person once told me about typography is:
        </Text>
        <div className="max-w-2xl pl-4 my-6 border-l-2 border-light-on-background-500">
          <Text as="i" variant="lgMediumItalic">
            “Why is Tailwind removing the default styles on my h1 elements? How do I disable this?
            What do you mean I lose all the other base styles too?
          </Text>
        </div>
        <Text variant="lg">The image aspect ratio to be used 2:1</Text>
        <img src="/rectangle_9.png" alt="article" className="w-full h-auto my-6 object-conains" />
        <Text variant="lg" className="mt-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old.
        </Text>
        <Text variant="lg" className="mt-6">
          Now I&apos;m going to show you an example of an unordered list too:
        </Text>
        <ul className="pl-6 list-disc">
          <li>So here is the first item in this list.</li>
          <li>In this example we&apos;re keeping the items short.</li>
          <li>Later, we&apos;ll use longer, more complex list items.</li>
        </ul>
        <Text variant="lg" className="mt-6">
          And that&apos;s the end of this section.
        </Text>
        <Text as="h1" variant="3xl" className="mt-16">
          What if we stack headings?
        </Text>
        <Text as="p" variant="2XlMedium" className="mt-8">
          We should make sure that looks good, too.
        </Text>
        <Text as="p" variant="lg" className="mt-4">
          Sometimes you have headings directly underneath each other. In those cases you often have
          to undo the top margin on the second heading because it usually looks better for the
          headings to be closer together than a paragraph followed by a heading should be.
        </Text>
        <Text as="p" variant="2XlMedium" className="mt-8">
          We should make sure that looks good, too.
        </Text>
        <Text as="p" variant="lg" className="mt-4">
          Sometimes you have headings directly underneath each other. In those cases you often have
          to undo the top margin on the second heading because it usually looks better for the
          headings to be closer together than a paragraph followed by a heading should be.
        </Text>
        <Text as="h1" variant="2XlMedium" className="mt-16">
          There are other elements we need to style
        </Text>
        <Text as="p" variant="lg" className="mt-4">
          I almost forgot to mention links, like this link to the Tailwind CSS website. We almost
          made them blue but that&apos;s so yesterday, so we went with dark gray, feels edgier.
        </Text>
        <Text as="p" variant="lg" className="mt-4">
          I almost forgot to mention links, like this link to the Tailwind CSS website. We almost
          made them blue but that&apos;s so yesterday, so we went with dark gray, feels edgier.
        </Text>
        <TableComponent />
        <Text as="p" variant="lg" className="mt-4">
          Sometimes you have headings directly underneath each other. In those cases you often have
          to undo the top margin on the second heading because it usually looks better for the
          headings to be closer together than a paragraph followed by a heading should be.
        </Text>
        <Text as="h1" variant="2XlMedium" className="mt-8">
          We should make sure that looks good, too.
        </Text>
        <Text as="p" variant="lg" className="mt-4">
          Sometimes you have headings directly underneath each other. In those cases you often have
          to undo the top margin on the second heading because it usually looks better for the
          headings to be closer together than a paragraph followed by a heading should be.
        </Text>
        <Text as="p" variant="lgMedium" className="mt-8">
          We should make sure that looks good, too.
        </Text>
        <Text as="p" variant="lg" className="mt-2">
          But now we have. Please don&apos;t use h5 or h6 in your content, Medium only supports two
          heading levels for a reason, you animals. I honestly considered using a before
          pseudo-element to scream at you if you use an h5 or h6.
        </Text>
      </div>
    </div>
  );
};

export default Showcases;
