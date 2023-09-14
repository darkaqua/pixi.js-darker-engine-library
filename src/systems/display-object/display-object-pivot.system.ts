import { Component, Library, Utils } from "../../mod.ts";

export const displayObjectPivotSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { vector2d } = entity.getComponent(Component.DISPLAY_OBJECT_PIVOT);
    if (!vector2d) return;

    const currentDisplayObject = Utils.render.getContainer(id);
    currentDisplayObject.pivot.set(vector2d.x, vector2d.y);
  };

  const onUpdate = (id: number) => onAdd(id);

  return {
    components: [Component.DISPLAY_OBJECT, Component.DISPLAY_OBJECT_PIVOT],
    onAdd,
    onUpdate,
  };
};
