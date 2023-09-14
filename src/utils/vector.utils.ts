import { Vector2d, Vector3d } from "../mod.ts";

export const vectorUtils = () => {
  const isVector2dEqual = (vec1: Vector2d, vec2: Vector2d): boolean =>
    vec1.x === vec2.x && vec1.y === vec2.y;

  const isVector3dEqual = (vec1: Vector3d, vec2: Vector3d): boolean =>
    isVector2dEqual(vec1, vec2) && vec1.z === vec2.z;

  const addVector2d = (vector2dA: Vector2d, vector2dB: Vector2d) => ({
    x: vector2dA.x + vector2dB.x,
    y: vector2dA.y + vector2dB.y,
  });

  const addVector3d = (vector3dA: Vector3d, vector3dB: Vector3d) => ({
    ...addVector2d(vector3dA, vector3dB),
    z: vector3dA.z + vector3dB.z,
  });

  const subVector2d = (vector2dA: Vector2d, vector2dB: Vector2d) => ({
    x: vector2dA.x - vector2dB.x,
    y: vector2dA.y - vector2dB.y,
  });

  return {
    isVector2dEqual,
    isVector3dEqual,
    addVector2d,
    addVector3d,
    subVector2d,
  };
};
