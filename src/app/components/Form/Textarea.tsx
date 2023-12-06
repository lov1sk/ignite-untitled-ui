import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type TextareaProps = ComponentProps<"textarea">;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
"
      className={twMerge(
        "w-full min-h-textarea resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none ",
        "focus:border-violet-500 focus:ring-2 focus:ring-violet-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 dark:text-zinc-100 dark:placeholder-zinc-400"
      )}
      {...props}
    />
  );
}
