import {
  AnimatedSpriteComponent,
  AnimationStatus,
  Component,
  Library,
  Utils,
} from "../mod.ts";
import * as PIXI from "../libs/pixi.mjs";

export const animatedSpriteSystem = async () => {
  const entityAnimatedSpriteRecord: Record<string, AnimatedSpriteComponent> =
    {};

  const onAdd = async (entityId: number) => {
    const entity = Library.engine.getEntity(entityId);
    const { childOf } = entity.getComponent(Component.DISPLAY_OBJECT);
    const { spritesheet, animation, animationSpeed, animationStatus } = entity
      .getComponent(Component.ANIMATED_SPRITE);

    entityAnimatedSpriteRecord[entityId] = {
      animation,
      spritesheet,
    };

    const parentContainer = Utils.render.getContainer(childOf);
    const { animations } = Library.spriteSheet.get(spritesheet);

    const animatedSprite = new PIXI.AnimatedSprite(animations[animation]);
    animatedSprite.onComplete = () => {
      entity.updateComponent(Component.ANIMATED_SPRITE, {
        animationStatus: AnimationStatus.STOP,
      } as AnimatedSpriteComponent);
    };
    animatedSprite.name = Utils.render.getDisplayObjectName(entityId);

    onAddOrUpdate(animatedSprite, animationStatus, animationSpeed);

    parentContainer.addChild(animatedSprite);

    const { width, height } = animatedSprite.getBounds();
    await entity.updateComponent(Component.DISPLAY_OBJECT_BOUNDS, {
      bounds: {
        width,
        height,
      },
    });
  };

  const onUpdate = async (id: number) => {
    const entity = Library.engine.getEntity(id);
    const { spritesheet, animation, animationStatus, animationSpeed } = entity
      .getComponent(Component.ANIMATED_SPRITE);

    const { spritesheet: lastSpritesheetName, animation: lastAnimation } =
      entityAnimatedSpriteRecord[id];

    const animatedSprite = Utils.render.getContainer(
      id,
    ) as typeof PIXI.AnimatedSprite;

    if (lastSpritesheetName !== spritesheet || lastAnimation !== animation) {
      const { animations } = Library.spriteSheet.get(spritesheet);

      animatedSprite.textures = animations[animation];
    }

    onAddOrUpdate(animatedSprite, animationStatus, animationSpeed);

    entityAnimatedSpriteRecord[id] = {
      animation,
      spritesheet,
    };
  };

  const onAddOrUpdate = (
    animatedSprite: PIXI.AnimatedSprite,
    status?: AnimationStatus,
    animationSpeed?: number,
  ) => {
    animatedSprite.loop = status === AnimationStatus.PLAY_IN_LOOP;

    if (
      status === AnimationStatus.PLAY ||
      status === AnimationStatus.PLAY_IN_LOOP
    ) {
      animatedSprite.play();
    }
    if (status === AnimationStatus.STOP) animatedSprite.stop();

    if (animationSpeed !== undefined) {
      animatedSprite.animationSpeed = animationSpeed;
    }
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.ANIMATED_SPRITE],
    onAdd,
    onUpdate,
  };
};
