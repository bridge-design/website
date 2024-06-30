import { team as btgTeam } from "content/team";

export default function Avatar({ name }) {
  return (
    <div className="relative flex mb-8 -mr-4 group flex-column ">
      <div className="w-12 h-12 overflow-hidden border-2 rounded-full border-light-on-background-300 group group-hover:scale-105 transition-200">
        <img
          src={btgTeam[name].photoUrl}
          title={btgTeam[name].name}
          alt={btgTeam[name].name}
          className="w-full rounded-full"
        />
      </div>
      <p className="w-20 absolute invisible h-8 text-center -left-1/2 tranlate-x-0.5 text-small -bottom-8 group-hover:visible text-xs">
        {btgTeam[name].name}
      </p>
    </div>
  );
}
