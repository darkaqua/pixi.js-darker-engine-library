import {
  Component,
  DisplayObjectComponent,
  Entity,
  SpriteComponent,
} from "../mod.ts";

type Props = SpriteComponent & DisplayObjectComponent;

export const spriteEntity = ({ childOf, ...spriteProps }: Props) => ({
  type: Entity.SPRITE,
  data: {
    [Component.DISPLAY_OBJECT]: {
      childOf,
    },
    [Component.SPRITE]: spriteProps,
  },
  components: [Component.DISPLAY_OBJECT, Component.SPRITE],
});
