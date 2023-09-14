import { Component, Library, Utils } from "../../mod.ts";

export const displayObjectSortChildrenSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { sortChildren } = entity.getComponent(
      Component.DISPLAY_OBJECT_SORT_CHILDREN,
    );
    if (sortChildren === undefined) return;

    const currentDisplayObject = Utils.render.getContainer(id);
    currentDisplayObject.sortableChildren = sortChildren;
  };

  const onUpdate = (id: number) => onAdd(id);

  return {
    components: [
      Component.DISPLAY_OBJECT,
      Component.DISPLAY_OBJECT_SORT_CHILDREN,
    ],
    onAdd,
    onUpdate,
  };
};
