import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function DarkLight() {
     const { setTheme, theme } = useTheme();
  return (
    <button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className='flex justify-end items-center'
    >
      {theme === "light" ? (
        <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      ) : (
        <Moon className='rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      )}
    </button>
  );
}
