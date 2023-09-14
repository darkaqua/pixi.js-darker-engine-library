import {
  AnimatedSpriteComponent,
  Component,
  DisplayObjectComponent,
  Entity,
} from "../../mod.ts";

type Props = AnimatedSpriteComponent & DisplayObjectComponent;

export const animatedSpriteEntity = (
  { spritesheet, animation, animationStatus, animationSpeed, childOf }: Props,
) => ({
  type: Entity.ANIMATED_SPRITE,
  data: {
    [Component.DISPLAY_OBJECT]: {
      childOf,
    },
    [Component.ANIMATED_SPRITE]: {
      spritesheet,
      animation,
      animationStatus: animationStatus,
      animationSpeed,
    },
  },
  components: [Component.DISPLAY_OBJECT, Component.ANIMATED_SPRITE],
});
