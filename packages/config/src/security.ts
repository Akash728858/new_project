// Security-related config helpers placeholder.

export function getCorsOrigins(): string[] {
  const raw = process.env["CORS_ORIGINS"] ?? "";
  return raw.split(",").map(x => x.trim()).filter(x => x.length > 0);
}
