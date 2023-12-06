"use client";
import * as Input from "@/app/components/Input";
import * as FileInput from "@/app/components/Form/FileInput/index";
import { twMerge } from "tailwind-merge";
import { SettingsTabs } from "./components/SettingsTabs";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as SelectComponent from "./components/Form/Select/index";
import { Textarea } from "./components/Form/Textarea";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <>
      {/** Header Title */}
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />
      {/** Submit form */}
      <div
        className={twMerge(
          // Estilização base
          "mt-8 flex flex-col gap-4 justify-between pb-5 border-b border-zinc-200",
          // Responsive only
          "md:flex-row md:items-center",
          // Darkmode only
          "dark:border-zinc-700"
        )}
      >
        <div className="space-y-1">
          <h2
            className={twMerge(
              // Estilização base
              "text-lg font-medium text-zinc-900",
              // Responsive only
              "dark:text-zinc-100"
            )}
          >
            Personal info
          </h2>
          <span className="text-sm/5 text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex gap-3">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" form="settings" variant="primary">
            Save
          </Button>
        </div>
      </div>
      {/** Main form */}
      <form
        id="settings"
        className={twMerge(
          // Base Styles
          "w-full gap-5 flex flex-col divide-y divide-zinc-20 text-zinc-700 text-sm/5",
          // Darkmode only
          "dark:divide-zinc-700 dark:text-zinc-100"
        )}
      >
        {/** Name Info */}
        <div
          className={twMerge(
            // Base Styles
            "mt-6 flex flex-col gap-6",
            // Responsive only
            "md:grid md:grid-cols-form md:items-start"
          )}
        >
          <label htmlFor="firstName">Name</label>
          <div
            className={twMerge(
              // Base Styles
              "flex flex-col gap-6",
              // Responsive only
              "md:grid md:grid-cols-2 lg:max-w-xl"
            )}
          >
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Olivia" />
            </Input.Root>
            <div className={twMerge("flex flex-col gap-3 ", "md:block")}>
              <label htmlFor="lastName" className="md:sr-only">
                Sobrenome
              </label>
              <Input.Root>
                <Input.Control id="lastName" defaultValue="Olivia" />
              </Input.Root>
            </div>
          </div>
        </div>
        {/** Email Info */}
        <div
          className={twMerge(
            // Base Styles
            "mt-6 flex flex-col gap-6 pt-5 ",
            // Responsive only
            "md:grid md:grid-cols-form  md:items-start"
          )}
        >
          <label htmlFor="email">Email</label>
          <div className="text-sm font-medium lg:max-w-xl">
            <Input.Root>
              <Input.Prefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                defaultValue="olivia@gmail.com"
                type="email"
                id="email"
              />
            </Input.Root>
          </div>
        </div>
        {/** Profile Photo */}
        <div
          className={twMerge(
            // Base Styles
            "mt-6 pt-5 flex flex-col gap-8",
            // Responsivel only
            "md:grid md:grid-cols-form "
          )}
        >
          <div>
            <label htmlFor="photo">Your Photo</label>
            <p className="text-sm?5 text-zinc-500">
              This will be displayed on your profile.
            </p>
          </div>

          <FileInput.Root className="flex flex-col md:flex-row md:items-start gap-5 lg:max-w-xl">
            {/** Image Preview */}
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.InputControl />
          </FileInput.Root>
        </div>
        {/** User Role Input*/}
        <div className="mt-6 flex flex-col md:grid md:grid-cols-form gap-8 pt-5">
          <span>Role</span>
          <div className="text-sm font-medium lg:max-w-xl">
            <Input.Root>
              <Input.Control defaultValue="Member" type="text" id="role" />
            </Input.Root>
          </div>
        </div>
        {/** User Country  Select*/}
        <div className="mt-6 flex flex-col md:grid md:grid-cols-form gap-8 pt-5">
          <span>Country</span>
          <SelectComponent.Select placeholder="Choose a country">
            <SelectComponent.SelectItem value="br" text="Brazil" />
          </SelectComponent.Select>
        </div>
        {/** User Timezone  Select*/}
        <div className="mt-6 flex flex-col md:grid md:grid-cols-form gap-8 pt-5">
          <span>Timezone</span>
          <SelectComponent.Select placeholder="Choose a timezone">
            <SelectComponent.SelectItem
              value="utc-8"
              text="America São Paulo (UTC-03:00)"
            />
          </SelectComponent.Select>
        </div>

        {/** User Bio */}
        <div className="mt-6 flex flex-col md:grid md:grid-cols-form gap-8 pt-5 items-start">
          <div>
            <span>Bio</span>
            <p className="text-sm/5 text-zinc-5000">
              Write a short introduction
            </p>
          </div>

          <div className="w-full space-y-3">
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:items-center justify-center lg:max-w-xl ">
              <SelectComponent.Select
                placeholder="Text size"
                defaultValue={"size-1"}
              >
                <SelectComponent.SelectItem value="size-1" text="Normal text" />
              </SelectComponent.Select>
              {/**Icons */}
              <div className="flex gap-3 items-center justify-start">
                <Button type="button" variant="ghost">
                  <Bold strokeWidth={4} className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic strokeWidth={4} className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost">
                  <Link strokeWidth={4} className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost">
                  <List strokeWidth={4} className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered strokeWidth={4} className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Textarea id="bio" />
          </div>
        </div>
        <div className="mt-6 flex flex-col md:grid md:grid-cols-form gap-8 pt-5 md:items-start">
          <div>
            <span>Portfolio Projects</span>
            <p className="text-sm/5 text-zinc-5000">
              Share a few snippets of your work.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FileInput.Root className="flex flex-col items-start gap-5 lg:max-w-xl">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.InputControl multiple />
            </FileInput.Root>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3 pt-5 ">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" form="settings" variant="primary">
            Save
          </Button>
        </div>
      </form>
    </>
  );
}
