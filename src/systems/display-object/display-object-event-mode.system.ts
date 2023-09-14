import { Component, Library, Utils } from "../../mod.ts";

export const displayObjectEventModeSystem = async () => {
  const onAdd = async (entityId: number) => {
    const entity = Library.engine.getEntity(entityId);
    const displayObjectContainer = Utils.render.getContainer(entityId);

    const { eventMode } = entity.getComponent(
      Component.DISPLAY_OBJECT_EVENT_MODE,
    );

    displayObjectContainer.eventMode = DisplayObjectEventMode[eventMode]
      .toLowerCase();
  };

  const onUpdate = async (entityId: number, component: Component) => {
    if (component !== Component.DISPLAY_OBJECT_EVENT_MODE) return;
    await onAdd(entityId);
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.DISPLAY_OBJECT_EVENT_MODE],
    onAdd,
    onUpdate,
  };
};
