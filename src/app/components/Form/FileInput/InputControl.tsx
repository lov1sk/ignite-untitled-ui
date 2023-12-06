"use client";

import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

type InputControlProps = ComponentProps<"input">;

export function InputControl({
  multiple = false,
  ...props
}: InputControlProps) {
  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return null;
    }

    // Faço o cast de fileList para um array de File, melhor para trabalhar
    const files = Array.from(event.target.files);

    // Atualizo o estado
    onFilesSelected(files, multiple);
  }
  const { id, onFilesSelected } = useFileInput();
  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      {...props}
      onChange={handleFilesSelected}
      multiple={multiple}
    />
  );
}
