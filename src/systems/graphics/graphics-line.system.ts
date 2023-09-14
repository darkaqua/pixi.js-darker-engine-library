import { Component, Library, Utils } from "../../mod.ts";
import * as PIXI from "../../libs/pixi.mjs";

export const graphicsLineSystem = async () => {
  const onAdd = async (entityId: number) => {
    const entity = Library.engine.getEntity(entityId);
    const { childOf } = entity.getComponent(Component.DISPLAY_OBJECT);
    const { color } = entity.getComponent(Component.GRAPHICS);
    const { width, startPoint, endPoint } = entity.getComponent(
      Component.GRAPHICS_LINE,
    );

    const name = Utils.render.getDisplayObjectName(entityId);
    const parentContainer = Utils.render.getContainer(childOf);

    const graphics =
      (parentContainer.getChildByName(name) as typeof PIXI.Graphics) ||
      new PIXI.Graphics();
    graphics.clear();
    graphics
      .lineStyle(width, color)
      .moveTo(startPoint.x, startPoint.y)
      .lineTo(-endPoint.x, -endPoint.y);
    graphics.name = name;

    parentContainer.addChild(graphics);
  };

  const onUpdate = async (entityId: number, component: Component) => {
    if (component !== Component.GRAPHICS_LINE) return;
    await onAdd(entityId);
  };

  return {
    components: [
      Component.DISPLAY_OBJECT,
      Component.GRAPHICS,
      Component.GRAPHICS_LINE,
    ],
    onAdd,
    onUpdate,
  };
};
