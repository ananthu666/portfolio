export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const accentColor = {
  ai: "#5EEAD4",
  erp: "#E8A33D",
  automation: "#8B93F8",
} as const;
