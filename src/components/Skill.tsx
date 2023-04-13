import "./Skill.css";

interface SkillProps {
  name: string;
}

//type SkillProps = ISkill;

export default function Skill({ name }: SkillProps) {
  return <li>{name}</li>;
}
