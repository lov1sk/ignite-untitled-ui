"use client";
import * as SelectRadix from "@radix-ui/react-select";
import { Check } from "lucide-react";
import { ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SelectItemProps extends SelectRadix.SelectItemProps {
  text: string;
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className={twMerge(
        "text-sm flex gap-2 px-3 py-2.5 items-center justify-between outline-none data-[highlighted]:bg-zinc-50 cursor-pointer",
        "dark:data-[highlighted]:bg-zinc-600 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 "
      )}
      {...props}
    >
      <SelectRadix.ItemText className="text-black ">
        {text}
      </SelectRadix.ItemText>
      <SelectRadix.ItemIndicator>
        <Check
          className={twMerge("w-4 h-4 text-violet-500", "dark:text-violet-300")}
        />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  );
}
