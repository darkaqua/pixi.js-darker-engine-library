import * as PIXI from "./libs/pixi.mjs";

export const Library = (() => {
  let engine: any;
  let app: any;

  const setEngine = (_engine: any) => engine = _engine;
  const setApp = (_app: any) => app = _app;

  const spriteSheet = () => {
    const spriteSheetMap: Record<string, typeof PIXI.Spritesheet> =
      {} as Record<
        string,
        typeof PIXI.Spritesheet
      >;

    const set = (
      name: string,
      spriteSheet: typeof PIXI.Spritesheet,
    ) => (spriteSheetMap[name] = spriteSheet);

    const get = (name: string): typeof PIXI.Spritesheet => spriteSheetMap[name];

    return {
      set,
      get,
    };
  };

  return {
    setApp,
    setEngine,
    engine,
    app,
    spriteSheet: spriteSheet(),
  };
})();
