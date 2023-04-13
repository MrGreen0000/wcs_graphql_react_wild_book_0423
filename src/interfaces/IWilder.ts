import Iskill from "./ISkill";

export default interface IWilder {
  id: number;
  name: string;
  city: string;
  skills: Iskill[];
}
