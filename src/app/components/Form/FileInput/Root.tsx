"use client";

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

type RootProps = ComponentProps<"div">;
type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

// Basicamente crio o contexto e digo que as informações salvas serão o id, os arquivos selecionados e a função para atualizar os arquivos
const FileInputContext = createContext({} as FileInputContextType);
export function Root(props: RootProps) {
  // Crio um id que o react não ira alterar após re-renderizações
  const id = useId();
  // Crio um estado para armazenar arquivos que poderão ser escolhidos pelo usuario
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }
  /** Digo que todo a raiz do componente podera ter acesso ao id */
  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

// Exporto um hook personalizado que ira me permitir ter acesso ao id para usar nas labels
export const useFileInput = () => useContext(FileInputContext);
