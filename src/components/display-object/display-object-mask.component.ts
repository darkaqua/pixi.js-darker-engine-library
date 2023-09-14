import { Vector2d } from "../../mod.ts";

export type DisplayObjectMaskComponent<SpriteSheet = unknown> =
  & {
    pivot?: Vector2d;
    visible?: boolean;
  }
  & (
    | DisplayObjectMaskSpriteComponent<SpriteSheet>
    | DisplayObjectMaskPolygonComponent
  );

type DisplayObjectMaskSpriteComponent<SpriteSheet> = {
  type: "sprite";
  spriteSheet: SpriteSheet | string;
  spriteName: string;
};

type DisplayObjectMaskPolygonComponent = {
  type: "polygon";
  polygon: number[];
};
