"use client";
import { User } from "lucide-react";
import { ComponentProps, useMemo } from "react";
import { useFileInput } from "./Root";
import { twMerge } from "tailwind-merge";

type ImagePreviewProps = ComponentProps<"div">;

export function ImagePreview(props: ImagePreviewProps) {
  const { files } = useFileInput();

  /** aqui o memo é usado pois não queremos que esse condigo execute a cada
   * renderização do componente, queremos que execute apenas quando o estado de
   * arquivos for atualizado
   */
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (!previewURL) {
    return (
      <div
        className={twMerge(
          "w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center",
          "bg-violet-500/10"
        )}
        {...props}
      >
        <User className="h-8 w-8 text-violet-600" />
      </div>
    );
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt=""
        className="w-16 h-16 rounded-full object-cover"
      />
    );
  }
}
