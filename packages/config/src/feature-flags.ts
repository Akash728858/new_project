// Feature flag helpers placeholder.

export function isFeatureEnabled(name: string): boolean {
  const value = process.env["FEATURE_" + name.toUpperCase()];
  return value === "1" || value === "true";
}
