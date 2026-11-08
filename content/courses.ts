export const levelCodes = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export type LevelCode = (typeof levelCodes)[number];

export type LevelGroup = "beginner" | "intermediate" | "advanced";

export type LevelTone = "red" | "gold" | "blue" | "navy" | "ink" | "crimson";

export const levels: { code: LevelCode; group: LevelGroup; tone: LevelTone }[] = [
  { code: "A1", group: "beginner", tone: "red" },
  { code: "A2", group: "beginner", tone: "gold" },
  { code: "B1", group: "intermediate", tone: "blue" },
  { code: "B2", group: "intermediate", tone: "navy" },
  { code: "C1", group: "advanced", tone: "ink" },
  { code: "C2", group: "advanced", tone: "crimson" },
];
