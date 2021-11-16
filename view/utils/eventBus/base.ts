import mitt from 'mitt';

export const eventBus = mitt();
export const bus = eventBus;

export enum VEventType {
  CreateApp = 'createApp',
}
