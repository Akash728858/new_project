// Outbox pattern placeholder for domain events.

export interface OutboxEvent {
  id: string;
  type: string;
  payload: unknown;
  createdAt: Date;
}

export function enqueueOutboxEvent(event: OutboxEvent): void {
  throw new Error("Outbox enqueue is not implemented yet.");
}
