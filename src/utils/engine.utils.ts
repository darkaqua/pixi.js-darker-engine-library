import { Component, Library } from "../mod.ts";

export const engineUtils = () => {
  const getChildEntities = (entityId: number) =>
    Library.engine.getEntityListByComponents(Component.DISPLAY_OBJECT).filter(
      (entity) =>
        entity.getComponent(Component.DISPLAY_OBJECT).childOf === entityId,
    );

  return {
    getChildEntities,
  };
};
