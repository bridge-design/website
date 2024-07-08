import { team as btgTeam } from '@/data/team'

export default function Avatar({ name }) {
  return (
    <div className="flex-column group relative -mr-4 mb-8 flex">
      <div className="border-light-on-background-300 transition-200 group h-12 w-12 overflow-hidden rounded-full border-2 group-hover:scale-105">
        <img
          src={btgTeam[name].photoUrl}
          title={btgTeam[name].name}
          alt={btgTeam[name].name}
          className="w-full rounded-full"
        />
      </div>
      <p className="tranlate-x-0.5 text-small invisible absolute -bottom-8 -left-1/2 h-8 w-20 text-center text-xs group-hover:visible">
        {btgTeam[name].name}
      </p>
    </div>
  );
}
