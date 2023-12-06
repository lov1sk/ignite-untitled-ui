"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { twMerge } from "tailwind-merge";

export function Trigger() {
  // Uso o id
  const { id } = useFileInput();
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "group flex flex-col w-full gap-3 cursor-pointer items-center border border-zinc-200 rounded-lg px-6 py-4 shadow-sm",
        "hover:border-violet-200 hover:bg-violet-25",
        "dark:border-zinc-700 dark:hover:border-violet-800 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover-text-violet-300"
      )}
    >
      <div
        className={twMerge(
          "border-6 bg-zinc-100 border-zinc-50 flex items-center justify-center w-10 h-10 rounded-full  ",
          "group-hover:border-violet-50 group-hover:bg-violet-100",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700"
        )}
      >
        <UploadCloud
          className={twMerge(
            "h-4 w-4 text-zinc-600 ",
            "group-hover:text-violet-600",
            "dark:text-zinc-500 dark:group-hover:text-violet-300"
          )}
        />
      </div>
      <div className="flex flex-col gap-1 justify-center text-center">
        <span>
          <span
            className={twMerge(
              "text-sm font-semibold text-violet-600",
              "dark:group-hover:text-violet-300 dark:text-violet-500"
            )}
          >
            Click to upload
          </span>{" "}
          or drag and drop
        </span>
        <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>

      {/**Input */}
    </label>
  );
}
