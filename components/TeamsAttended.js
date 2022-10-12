import { Text, Icon } from "@bridge-the-gap/design-system";
import SectionTitle from "@components/SectionTitle";

// Order of logos can be changed here.
const logos = [
  "planet",
  "vaisala",
  "scoutbee",
  "buildie",
  "paxful",
  "storaenso",
  "castor",
];
export default function TeamsAttended() {
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <div className="flex items-start">
        <Icon name="EventsAlt32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          Teams already attended our workshop
        </Text>
      </div>
      <div className="flex items-center mt-16">
        {logos.length > 0 &&
          logos.map((name) => (
            <div key={name} className="max-h-full mx-2">
              <img src={`./logo/${name}_logo.png`} alt={`${name} logo`} />
            </div>
          ))}
      </div>
    </div>
  );
}
