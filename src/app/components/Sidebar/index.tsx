"use client";
import {
  SearchIcon,
  Home,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  LifeBuoy,
  Cog,
  BarChart,
  Menu,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import * as Input from "@/app/components/Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import Logo from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Button } from "../Button";

export function Sidebar() {
  return (
    <Collapsible.Root
      className={twMerge(
        "fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:h-screen",
        "lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:h-screen",
        "dark:bg-zinc-900 dark:border-zinc-700"
      )}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="w-6 h-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-col pt-4 gap-6 flex-1 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <SearchIcon className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className=" space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>
        </div>
        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
