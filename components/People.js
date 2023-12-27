import { ProfileCard } from "@bridge-the-gap/design-system";

export function People({ people }) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-10 mt-10 lg:flex lg:flex-col">
      {people.map((props) => (
        <ProfileCard key={props.name} {...props} />
      ))}
    </div>
  );
}
