export function themeEffect() {
  // `null` preference implies system (auto)
  const pref = localStorage.getItem("theme");

  if (pref === "dark" || (!pref && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");

    return "dark";
  }

  document.documentElement.classList.add("light");

  return "light";
}
