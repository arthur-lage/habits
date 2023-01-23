import { Plus } from "phosphor-react";
import HabitsLogo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex justify-between items-center w-full">
      <img className="w-[147.84px]" src={HabitsLogo} alt="Habits logo" />

      <button className="py-4 px-6 border-[1px] hover:border-violet-300 border-violet-500 text-white flex items-center gap-3 rounded-lg font-inter font-semibold text-base">
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </header>
  );
}
