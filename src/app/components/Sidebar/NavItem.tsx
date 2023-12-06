import { Home, ChevronDown } from "lucide-react";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className={twMerge(
        "group flex items-center gap-3 rounded px-3 py-2 outline-none ",
        "focus:border-violet-400 focus:ring-2 focus:ring-violet-200 hover:bg-purple-50",
        "dark:hover:bg-zinc-800"
      )}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span
        className={twMerge(
          "group-hover:text-purple-600 text-zinc-700 font-medium",
          "dark:text-zinc-100 dark:group-hover:text-violet-300"
        )}
      >
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-purple-300" />
    </a>
  );
}
