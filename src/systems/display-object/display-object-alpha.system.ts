import { Component, Library, Utils } from "../../mod.ts";

export const displayObjectAlphaSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { alpha } = entity.getComponent(Component.DISPLAY_OBJECT_ALPHA);
    if (alpha === undefined) return;

    const currentDisplayObject = Utils.render.getContainer(id);
    currentDisplayObject.alpha = alpha;
  };

  const onUpdate = async (id: number, component: Component) => {
    if (component !== Component.DISPLAY_OBJECT_ALPHA) return;
    await onAdd(id);
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.DISPLAY_OBJECT_ALPHA],
    onAdd,
    onUpdate,
  };
};
