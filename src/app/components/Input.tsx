import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// Tipagem da função de controle, passo 3
type PrefixProps = ComponentProps<"div">;
// Pedaço que é o icone do componente
export function Prefix(props: PrefixProps) {
  return <div {...props} />;
}

// Tipagem da função de controle, passo 3
type ControlProps = ComponentProps<"input">;
// Função criada para ser o pedaço do input mesmo
export function Control(props: ControlProps) {
  return (
    <input
      className={twMerge(
        "flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none",
        "dark:text-zinc-100 dark:placeholder-zinc-400"
      )}
      placeholder="Search"
      {...props}
    />
  );
}
// Tipagem da função pai do componente, passo 3
type RootProps = ComponentProps<"div">;
// Pedaço que envolve todo o componente
export function Root(props: RootProps) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-2 w-full border border-zinc-300 shadow-sm rounded-lg px-3 py-2",
        " focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10",
        props.className
      )}
      {...props}
    />
  );
}
