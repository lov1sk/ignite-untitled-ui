"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}
export function TabItem({ title, isSelected = false, value }: TabItemProps) {
  return (
    <>
      {/** Aqui seria cada tab da aplicação, obrigatoriamente precisa de um value
       * pois esse permitira que o radix sabia qual o conteudo pra mostrar desta aba
       */}
      <Tabs.Trigger
        value={value}
        className="group relative px-1 pb-4 text-sm/5 font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none dark:text-zinc-400 dark:data-[state=active]:text-violet-300 dark:hover:text-violet-300"
      >
        <span className="whitespace-nowrap rounded group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4 group-focus-visible:ring-2">
          {title}
        </span>
        {isSelected ? (
          <motion.div
            layoutId="activeTab"
            className="absolute left-0 right-0 -bottom-px h-0.5 w-full bg-violet-700 dark:bg-violet-300"
          />
        ) : null}
      </Tabs.Trigger>
    </>
  );
}
