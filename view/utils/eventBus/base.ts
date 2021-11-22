import mitt from 'mitt';
import type { Emitter, EventType } from 'mitt';

export const eventBus = mitt();
export const bus = eventBus;

export enum VEventType {
  CreateApp = 'createApp',
}

export type EmitterType<T = unknown> = Emitter<Record<EventType, T>>;
