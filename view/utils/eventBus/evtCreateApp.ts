import { App } from '@vue/runtime-core';
import { bus, VEventType } from './base';

export function emitCreateApp(app: App<Element>) {
  bus.emit(VEventType.CreateApp, app);
}

export function onCreateApp(handler: (app?: App<Element>) => void) {
  bus.on(VEventType.CreateApp, handler);
}
