// Queue factory placeholder for BullMQ or similar.

import { QUEUE_INGESTION } from "./queue-names";

export function createQueue(name: string) {
  if (name === QUEUE_INGESTION) {
    // Configure ingestion queue here later.
  }
  throw new Error("Queue factory is not implemented yet.");
}

