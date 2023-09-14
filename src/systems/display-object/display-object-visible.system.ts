import { Component, Library, Utils } from "../../mod.ts";

export const displayObjectVisibleSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { visible } = entity.getComponent(Component.DISPLAY_OBJECT_VISIBLE);
    if (visible === undefined) return;

    const currentDisplayObject = Utils.render.getContainer(id);
    currentDisplayObject.visible = visible;
  };

  const onUpdate = (id: number) => onAdd(id);

  return {
    components: [Component.DISPLAY_OBJECT, Component.DISPLAY_OBJECT_VISIBLE],
    onAdd,
    onUpdate,
  };
};
