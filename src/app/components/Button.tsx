import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

// Esse componente pode receber todas as propriedades de um button html + o tipo da variante do botão
type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariant>;

const buttonVariant = tv({
  // Customização base, que todos os componentes terão por padrão
  base: [
    //
    "px-4 py-2 rounded-lg font-semibold border shadow-sm outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-violet-600",
    "active:opacity-80",
  ],
  variants: {
    // Customização que pode ser variada, conforme escolha passada
    variant: {
      primary: twMerge(
        "bg-violet-600 border border-violet-600 text-white hover:bg-violet-700",
        "dark:hover:bg-violet-500"
      ),
      outline: twMerge(
        "border-zinc-300 text-zinc-700 hover:bg-zinc-50",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-white/5 dark:text-zinc-100"
      ),
      ghost:
        "hover:bg-zinc-50 rounded-md shadow-none border-none px-2 dark:hover:bg-zinc-800 dark:text-zinc-400",
    },
  },

  // Se não for escolhido nenhuma variação do componente, usa a primary
  defaultVariants: {
    variant: "primary",
  },
});

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariant({ variant, className })} />
  );
}
