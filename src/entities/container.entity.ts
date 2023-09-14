import {
  Component,
  ContainerComponent,
  DisplayObjectComponent,
  Entity,
} from "../mod.ts";

type Props = ContainerComponent & DisplayObjectComponent;

export const containerEntity = ({ childOf }: Props = {}) => ({
  type: Entity.CONTAINER,
  data: {
    [Component.DISPLAY_OBJECT]: {
      childOf,
    },
  },
  components: [Component.DISPLAY_OBJECT, Component.CONTAINER],
});
