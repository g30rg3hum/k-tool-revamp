import Image from "next/image";
import CountryDot from "./country-dot";

export interface Country {
  name: string;
  // percentages
  x: number;
  y: number;
}
const countries: Country[] = [
  {
    name: "USA",
    x: 17,
    y: 50,
  },
  {
    name: "Ireland",
    x: 44,
    y: 40,
  },
  {
    name: "Germany",
    x: 49,
    y: 41,
  },
  {
    name: "Austria",
    x: 51,
    y: 46,
  },
  {
    name: "Japan",
    x: 85,
    y: 52,
  },
  {
    name: "Vietnam",
    x: 76,
    y: 60,
  },
  {
    name: "Thailand",
    x: 74,
    y: 64,
  },
  {
    name: "Malaysia",
    x: 78,
    y: 66,
  },
  {
    name: "Indonesia",
    x: 78,
    y: 72,
  },
  {
    name: "Singapore",
    x: 75,
    y: 68,
  },
];

export default function GlobalOutreachMap() {
  return (
    <div className="relative">
      <Image
        src="/images/countries.svg"
        alt="Map with countries we serve"
        width={800}
        height={800}
      />
      <div className="absolute inset-0">
        {countries.map((country) => (
          <CountryDot country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
}
