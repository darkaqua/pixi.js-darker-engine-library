import { Component, Library, Utils } from "../mod.ts";
import * as PIXI from "../libs/pixi.mjs";

export const spriteSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { childOf } = entity.getComponent(Component.DISPLAY_OBJECT);
    const spriteComponent = entity.getComponent(Component.SPRITE);

    const parentContainer = Utils.render.getContainer(childOf);

    const texture = (
      Library.spriteSheet.get(spriteComponent.spriteSheet)
    ).textures[spriteComponent.texture];
    const sprite = new PIXI.Sprite(texture);
    sprite.name = Utils.render.getDisplayObjectName(id);

    parentContainer.addChild(sprite);

    const { width, height } = sprite.getBounds();
    await entity.updateComponent(Component.DISPLAY_OBJECT_BOUNDS, {
      bounds: {
        width,
        height,
      },
    });
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.SPRITE],
    onAdd,
  };
};
