import { App } from '@vue/runtime-core';
import { bus, EmitterType, VEventType } from './base';

type AppBus = EmitterType<App<Element>>;

export function emitCreateApp(app: App<Element>) {
  (<AppBus>bus).emit(VEventType.CreateApp, app);
}

export function onCreateApp(handler: (app?: App<Element>) => void) {
  (<AppBus>bus).on(VEventType.CreateApp, handler);
}
