import {
  Component,
  DisplayObjectComponent,
  Entity,
  GraphicsComponent,
  GraphicsPolygonComponent,
} from "../../mod.ts";

type Props =
  & GraphicsComponent
  & GraphicsPolygonComponent
  & DisplayObjectComponent;

export const graphicsPolygonEntity = ({ childOf, polygon, color }: Props) => ({
  type: Entity.GRAPHICS,
  data: {
    [Component.DISPLAY_OBJECT]: {
      childOf,
    },
    [Component.GRAPHICS]: {
      color,
    },
    [Component.GRAPHICS_POLYGON]: {
      polygon,
    },
  },
  components: [
    Component.DISPLAY_OBJECT,
    Component.GRAPHICS,
    Component.GRAPHICS_POLYGON,
  ],
});
