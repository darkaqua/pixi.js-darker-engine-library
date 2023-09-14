import { Component, Library } from "../mod.ts";
import * as PIXI from "../libs/pixi.mjs";

export const particleContainerSystem = async () => {
  const onAdd = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { childOf } = entity.getComponent(Component.DISPLAY_OBJECT);
    const { maxSize } = entity.getComponent(Component.PARTICLE_CONTAINER);

    const parentContainer = Utils.render.getContainer(childOf);

    const particleContainer = new PIXI.ParticleContainer(maxSize, {});
    particleContainer.name = Utils.render.getDisplayObjectName(id);

    parentContainer.addChild(particleContainer);
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.PARTICLE_CONTAINER],
    onAdd,
  };
};
