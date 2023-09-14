import {
  animatedSpriteSystem,
  containerSystem,
  displayObjectAddPivotSystem,
  displayObjectAlphaSystem,
  displayObjectCenterSystem,
  displayObjectEventModeSystem,
  displayObjectFiltersSystem,
  displayObjectHitBoxSystem,
  displayObjectMaskSystem,
  displayObjectPivotSystem,
  displayObjectPositionSystem,
  displayObjectSortChildrenSystem,
  displayObjectSystem,
  displayObjectTintSystem,
  displayObjectVisibleSystem,
  displayObjectZIndexSystem,
  graphicsLineSystem,
  graphicsPolygonSystem,
  particleContainerSystem,
  spriteSystem,
} from "./mod.ts";

export const systems = [
  /** PIXI.JS **/
  containerSystem,
  spriteSystem,
  particleContainerSystem,
  animatedSpriteSystem,
  // graphics
  graphicsLineSystem,
  graphicsPolygonSystem,

  // The last one from pixi.js renders
  displayObjectSystem,
  // needs the above
  displayObjectPositionSystem,
  displayObjectPivotSystem,
  displayObjectVisibleSystem,
  displayObjectAlphaSystem,
  displayObjectZIndexSystem,
  displayObjectSortChildrenSystem,
  displayObjectMaskSystem,
  displayObjectFiltersSystem,
  displayObjectHitBoxSystem,
  displayObjectCenterSystem,
  displayObjectAddPivotSystem,
  displayObjectTintSystem,
  displayObjectEventModeSystem,
];
