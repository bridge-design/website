import Avatar from './Avatar'

export default function ProjectTeam({ team }) {
  return (
    <div className="flex w-full justify-center">
      {team.map((name) => (
        <Avatar key={name} name={name} />
      ))}
    </div>
  );
}
