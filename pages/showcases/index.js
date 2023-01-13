import {
  Text,
  CtaLink,
  Testimonial,
  Advantages,
  ProfileCard,
  HelpTeams,
} from "@bridge-the-gap/design-system";
import Link from "@components/link";

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
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
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
          <Text as="i" variant="lg">
            “Why is Tailwind removing the default styles on my h1 elements? How do I disable this?
            What do you mean I lose all the other base styles too?
          </Text>
        </div>
        <Text as="p" variant="lg">
          We hear you, but we're not convinced that simply disabling our base styles is what you
          really want. You don't want to have to remove annoying margins every time you use a p
          element in a piece of your dashboard UI. And I doubt you really want your blog posts to
          use the user-agent styles either — you want them to look awesome, not awful.
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          The <span className="">`@tailwindcss/typography`</span> plugin is our attempt to give you
          what you actually want, without any of the downsides of doing something stupid like
          disabling our base styles.
        </Text>
        <img
          src="/syntax_highlighter.png"
          alt="article"
          className="w-full h-auto my-6 object-conains"
        />
        <Text as="p" variant="lg">
          Night Owl them for more information about how to use the plugin and the features it
          includes,{" "}
          <Link href="https://play.tailwindcss.com/uj1vGACRJA?layout=preview" className="underline">
            read the documentation
          </Link>
          .
        </Text>
        <div className="w-full border-b my-14 border-light-on-background-300"></div>
        <Text as="h1" variant="3xl">
          What to expect from here on out
        </Text>
        <Text as="p" variant="lg" className="mt-10">
          What follows from here is just a bunch of absolute nonsense I've written to dogfood the
          plugin itself. It includes every sensible typographic element I could think of, like bold
          text, unordered lists, ordered lists, code blocks, block quotes, and even italics.
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          It's important to cover all of these use cases for a few reasons:
        </Text>
        <Text variant="lg" className="mt-6">
          <ol className="pl-6 list-decimal">
            <li>We want everything to look good out of the box.</li>
            <li>Really just the first reason, that's the whole point of the plugin.</li>
            <li>
              Here's a third pretend reason though a list with three items looks more realistic than
              a list with two items.
            </li>
          </ol>
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          Now we're going to try out another header style.
        </Text>
        <Text as="h1" variant="2xl" className="mt-9">
          Typography should be easy
        </Text>
        <Text as="p" variant="lg" className="mt-4">
          So that's a header for you — with any luck if we've done our job correctly that will look
          pretty reasonable.
        </Text>
        <Text as="p" variant="lg" className="mt-6">
          Something a wise person once told me about typography is:
        </Text>
        <div className="max-w-2xl pl-4 my-6 border-l-2 border-light-on-background-500">
          <Text as="i" variant="lg">
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
          Now I'm going to show you an example of an unordered list too:
        </Text>
        <Text variant="lg" className="mt-6">
          <ul className="pl-6 list-disc">
            <li>So here is the first item in this list.</li>
            <li>In this example we're keeping the items short.</li>
            <li>Later, we'll use longer, more complex list items.</li>
          </ul>
        </Text>
        <Text variant="lg" className="mt-6">
          And that's the end of this section.
        </Text>
      </div>
    </div>
  );
};

export default Showcases;
