"use client";
import { LogOut, SunMoon } from "lucide-react";
import { Button } from "../Button";
import { twMerge } from "tailwind-merge";
import { switchTheme } from "@/utils/switch-theme";

export function Profile() {
  return (
    <div className={twMerge("flex items-center gap-3")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/lov1sk.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span
          className={twMerge(
            "text-sm/5 font-semibold text-zinc-700",
            "dark:text-zinc-100"
          )}
        >
          Lucas Ribeiro
        </span>
        <span
          className={twMerge(
            "truncate text-sm/5 text-zinc-500",
            "dark:text-zinc-100"
          )}
        >
          lucasasdsadsadsad@gmail.com
        </span>
      </div>

      <div className="flex">
        <Button type="button" variant="ghost" onClick={() => switchTheme()}>
          <SunMoon className="text-zinc-500" />
        </Button>
        <Button type="button" variant="ghost">
          <LogOut className="text-zinc-500" />
        </Button>
      </div>
    </div>
  );
}
