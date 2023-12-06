"use client";
import * as SelectRadix from "@radix-ui/react-select";
import { ChevronDown, Clock } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SelectProps extends SelectRadix.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger
        className={twMerge(
          "flex gap-2 w-full items-center justify-between shadow-sm rounded-lg border border-zinc-300 p-3 outline-none  data-[placeholder]:text-zinc-500 data-[placeholder]:text-sm",
          "focus:border-violet-300 focus:ring-2 focus:ring-violet-100",
          "dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:data-[placeholder]:text-zinc-500",
          "lg:max-w-xl"
        )}
      >
        <SelectRadix.Value placeholder={placeholder} className="text-black" />
        <SelectRadix.Icon>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          sideOffset={8}
          position="popper"
          className={twMerge(
            "z-10 rounded-lg w-[--radix-select-trigger-width] border border-zinc-300 bg-white overflow-hidden animate-slideDownAndFade",
            "dark:border-zinc-700 dark:bg-zinc-800"
          )}
        >
          <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
