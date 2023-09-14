import { renderUtils } from "./render.utils.ts";
import { vectorUtils } from "./vector.utils.ts";
import { engineUtils } from "./engine.utils.ts";

export const Utils = (() => ({
  render: renderUtils(),
  vector: vectorUtils(),
  engine: engineUtils(),
}))();
