import { AnimationStatus } from "../../mod.ts";

export type AnimatedSpriteComponent = {
  spritesheet: string;
  animation: string;

  animationStatus?: AnimationStatus;
  animationSpeed?: number;
};
