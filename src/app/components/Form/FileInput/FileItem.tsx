import { formatBytes } from "@/utils/format-bytes";
import { UploadCloud, Trash2, CheckCircle2 } from "lucide-react";
import { Button } from "../../Button";
import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const fileItemVariant = tv({
  slots: {
    container:
      "group flex flex-1 rounded-lg border border-violet-500 gap-4 items-start p-4",
    icon: "w-10 h-10 flex items-center justify-center rounded-full border-4 border-zinc-50 bg-violet-100",
    deleteButton: "",
  },
  variants: {
    state: {
      error: {
        container: twMerge(
          "bg-error-25 border-error-300",
          "dark:bg-error-500/5 dark:border-error-500/30"
        ),
        icon: twMerge(
          "border-error-50 bg-error-100 text-error-600",
          "dark:border-error-500/30 dark:bg-error-500/5 dark:text-error-400"
        ),
        deleteButton: twMerge(
          "text-error-600 hover:text-error-900 hover:bg-error-25",
          "dark:text-error-400 dark:hover:text-error-300"
        ),
      },
      progress: {
        container: "",
        icon: "dark:bg-violet-600 dark:border-violet-500",
      },
      completed: {
        container: "border-violet-500",
        icon: "dark:bg-violet-600 dark:border-violet-500",
      },
    },
  },
  defaultVariants: {
    state: "progress",
  },
});

export type FileItemProps = {
  name: string;
  size: number;
} & VariantProps<typeof fileItemVariant> &
  ComponentProps<"div">;
export function FileItem({ name, size, state, ...props }: FileItemProps) {
  const { container, icon, deleteButton } = fileItemVariant({ state });
  return (
    <div key={name} className={container()} {...props}>
      {/** Icon */}
      <div className={icon()} {...props}>
        <UploadCloud className="h-5 w-5" />
      </div>

      {/**Files */}
      {state === "error" ? (
        <div className="flex flex-1 flex-col items start gap-1">
          <div className="space-y-1">
            <span
              className={twMerge(
                "text-sm/5 font-medium text-error-700 ",
                " dark:text-error-400"
              )}
            >
              Upload Failed, please try again
            </span>
            <p className="text-sm/5 text-error-600 dark:text-error-500">
              {name}
            </p>
            <button
              type="button"
              className={twMerge(
                "text-sm/5 text-error-700  font-semibold",
                "hover:text-error-900",
                "dark:text-error-400 dark:hover:text-error-300"
              )}
            >
              Try again
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex flex-col">
            <span className="text-sm/5 font-medium">{name}</span>
            <p className="text-sm/5 text-zinc-500">{formatBytes(size)}</p>
          </div>

          {/** Progress Info */}
          <div className="w-full flex items-center gap-3">
            {/**Progress bar */}
            <div
              className={twMerge(
                "flex-1 h-2 rounded-lg bg-zinc-100",
                " dark:bg-zinc-600"
              )}
            >
              <div
                className={twMerge(
                  "rounded-lg h-2 bg-violet-600 w-4/5",
                  "dark:bg-violet-400"
                )}
                style={
                  state === "completed" ? { width: "100%" } : { width: "80%" }
                }
              />
            </div>
            {/**Progress number */}
            <span
              className={twMerge(
                "text-sm font-medium text-zinc-700",
                "dark:text-zinc-300"
              )}
            >
              {state === "completed" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {/** Icon Indicator */}
      {state === "completed" ? (
        <CheckCircle2
          className={twMerge("h-5 w-5 fill-violet-600 text-white")}
        />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
