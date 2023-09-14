import { Component, Library, Utils } from "../../mod.ts";
import * as PIXI from "../../libs/pixi.mjs";

export const displayObjectMaskSystem = async () => {
  const onAdd = async (entityId: number) => {
    const entity = Library.engine.getEntity(entityId);
    const displayObjectMaskComponent = entity.getComponent(
      Component.DISPLAY_OBJECT_MASK,
    );

    const currentDisplayObject = Utils.render.getContainer(entityId);

    const { pivot, visible } = displayObjectMaskComponent;

    let displayObjectMaskVisible;
    let displayObjectMask;

    if (displayObjectMaskComponent.type === "sprite") {
      const { spriteSheet, spriteName } = displayObjectMaskComponent;

      const { textures } = Library.spriteSheet.get(spriteSheet);

      const texture = textures[spriteName];
      displayObjectMask = new PIXI.Sprite(texture);

      if (visible) displayObjectMaskVisible = new PIXI.Sprite(texture);
    }
    if (displayObjectMaskComponent.type === "polygon") {
      const drawGraphics = (displayObject: PIXI.DisplayObject) => {
        displayObject = new PIXI.Graphics();
        displayObject.beginFill(0xff3300);
        displayObject.drawPolygon(displayObjectMaskComponent.polygon);
        displayObject.endFill();
      };

      drawGraphics(displayObjectMask);
      if (visible) drawGraphics(displayObjectMaskVisible);
    }

    if (displayObjectMask) {
      const setVariables = (displayObject: PIXI.DisplayObject) => {
        displayObject.name = "mask";

        if (pivot) displayObject.pivot.copyFrom(pivot);

        const { texture: currentTexture } = displayObject;
        if (currentTexture) {
        }

        currentDisplayObject.addChild(displayObject);
      };
      setVariables(displayObjectMask);
      currentDisplayObject.mask = displayObjectMask;

      if (visible) {
        displayObjectMaskVisible.alpha = 0.5;
        setVariables(displayObjectMaskVisible);
      }
    }
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.DISPLAY_OBJECT_MASK],
    onAdd,
  };
};
