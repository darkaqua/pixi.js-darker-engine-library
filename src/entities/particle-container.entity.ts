import {
  Component,
  DisplayObjectComponent,
  Entity,
  ParticleContainerComponent,
} from "../mod.ts";

type Props = ParticleContainerComponent & DisplayObjectComponent;

export const particleContainerEntity = ({ childOf, maxSize }: Props = {}) => ({
  type: Entity.PARTICLE_CONTAINER,
  data: {
    [Component.DISPLAY_OBJECT]: {
      childOf,
    },
    [Component.PARTICLE_CONTAINER]: {
      maxSize,
    },
  },
  components: [Component.DISPLAY_OBJECT, Component.PARTICLE_CONTAINER],
});
