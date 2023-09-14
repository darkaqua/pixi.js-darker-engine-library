import { Component, Library, Utils } from "../../mod.ts";

export const displayObjectAddPivotSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { vector2d } = entity.getComponent(
      Component.DISPLAY_OBJECT_ADD_PIVOT,
    );
    if (!vector2d) return;

    const currentDisplayObject = Utils.render.getContainer(id);
    currentDisplayObject.pivot.x += vector2d.x;
    currentDisplayObject.pivot.y += vector2d.y;
  };

  const onUpdate = (id: number) => onAdd(id);

  return {
    components: [Component.DISPLAY_OBJECT, Component.DISPLAY_OBJECT_ADD_PIVOT],
    onAdd,
    onUpdate,
  };
};
