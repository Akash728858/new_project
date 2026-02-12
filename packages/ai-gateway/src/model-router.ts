// Simple model routing placeholder. Implement actual routing logic later.

export type ModelProvider = "openrouter-free" | "groq-free" | "huggingface";

export interface ModelRequest {
  provider: ModelProvider;
  prompt: string;
}

export interface ModelResponse {
  output: string;
}

export async function routeModelRequest(input: ModelRequest): Promise<ModelResponse> {
  return {
    output: "AI gateway is not implemented yet."
  };
}
