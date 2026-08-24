"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className={"flex flex-row items-center justify-center gap-1 overflow-hidden p-2 cursor-pointer " + className}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <div className="aspect-square h-6 w-6 overflow-hidden">
        <SunIcon
          size={24}
          className="brightness-0 transition-all duration-500 dark:-translate-y-full dark:brightness-100"
        />
        <MoonIcon
          size={24}
          className="brightness-0 transition-all duration-500 dark:-translate-y-full dark:brightness-100"
        />
      </div>
    </button>
  );
}
