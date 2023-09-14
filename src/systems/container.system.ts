import { Component, Library, Utils } from "../mod.ts";
import * as PIXI from "../libs/pixi.mjs";

export const containerSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { childOf } = entity.getComponent(Component.DISPLAY_OBJECT);

    const parentContainer = Utils.render.getContainer(childOf);

    const container = new PIXI.Container();
    container.name = Utils.render.getDisplayObjectName(id);

    parentContainer.addChild(container);
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.CONTAINER],
    onAdd,
  };
};
