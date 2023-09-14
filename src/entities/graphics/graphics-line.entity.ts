import {
  Component,
  DisplayObjectComponent,
  Entity,
  GraphicsComponent,
  GraphicsLineComponent,
} from "../../mod.ts";

type Props = GraphicsComponent & GraphicsLineComponent & DisplayObjectComponent;

export const graphicsLineEntity = (
  { childOf, width, endPoint, startPoint, color }: Props,
) => ({
  type: Entity.GRAPHICS,
  data: {
    [Component.DISPLAY_OBJECT]: {
      childOf,
    },
    [Component.GRAPHICS]: {
      color,
    },
    [Component.GRAPHICS_LINE]: {
      width,
      endPoint,
      startPoint,
    },
  },
  components: [
    Component.DISPLAY_OBJECT,
    Component.GRAPHICS,
    Component.GRAPHICS_LINE,
  ],
});
