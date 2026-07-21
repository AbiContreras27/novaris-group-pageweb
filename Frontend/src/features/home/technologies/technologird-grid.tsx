import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";

import { TechnologyCard } from "./technologies-card";

const technologies = [
  {
    name: "React",
    icon: <SiReact size={34} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={34} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={34} />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={34} />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs size={34} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={34} />,
  },
  {
    name: "Docker",
    icon: <SiDocker size={34} />,
  },
  {
    name: "GitHub",
    icon: <SiGithub size={34} />,
  },
  {
    name: "Figma",
    icon: <SiFigma size={34} />,
  },
];

export function TechnologiesGrid() {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
      "
    >
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.name}
          {...technology}
        />
      ))}
    </div>
  );
}