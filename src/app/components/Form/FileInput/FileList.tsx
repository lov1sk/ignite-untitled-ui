"use client";
import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/utils/format-bytes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button } from "../../Button";
import { FileItem } from "./FileItem";

export function FileList() {
  const { files } = useFileInput();

  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-6  w-full">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="completed"
          />
        );
      })}
    </div>
  );
}
