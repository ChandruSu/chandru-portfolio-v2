"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className={"flex flex-row items-center justify-center gap-1 overflow-hidden p-2 " + className}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <div className="aspect-square h-[24px] w-[24px] overflow-hidden">
        <MoonIcon
          size={24}
          className="brightness-0 transition-all duration-500 dark:translate-y-[-100%] dark:brightness-100"
        />
        <SunIcon
          size={24}
          className="brightness-0 transition-all duration-500 dark:translate-y-[-100%] dark:brightness-100"
        />
      </div>
    </button>
  );
}
