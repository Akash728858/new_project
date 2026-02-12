// In-memory prompt cache placeholder.

const cache = new Map<string, string>();

export function setPromptCache(key: string, value: string): void {
  cache.set(key, value);
}

export function getPromptCache(key: string): string | undefined {
  return cache.get(key);
}
