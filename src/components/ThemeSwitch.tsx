"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  function changeTheme() {
    if (resolvedTheme === "light") setTheme("dark");
    if (resolvedTheme === "dark") setTheme("light");
  }

  if (!isMounted)
    return (
      <div className="bg-light dark:bg-light-dark p-3 rounded-full">
        <ImSpinner9 size={24} className="animate-spin" />
      </div>
    );

  return (
    <button
      onClick={changeTheme}
      className="bg-light dark:bg-light-dark p-3 rounded-full"
    >
      {resolvedTheme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
}
