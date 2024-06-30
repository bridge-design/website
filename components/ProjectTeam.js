import Avatar from "./Avatar";

export default function ProjectTeam({ team }) {
  return (
    <div className="flex justify-center w-full">
      {team.map((name) => (
        <Avatar key={name} name={name} />
      ))}
    </div>
  );
}
