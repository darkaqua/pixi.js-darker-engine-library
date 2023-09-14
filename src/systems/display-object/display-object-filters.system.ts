import {
  Component,
  FiltersEnum,
  Library,
  OldFilmFilterType,
  RGBSplitFilterType,
  Utils,
} from "../../mod.ts";
import * as PIXI from "../../libs/pixi.mjs";
import { OldFilmFilter, RgbSplitFilter } from "../../libs/pixi-filters/mod.ts";

export const displayObjectFiltersSystem = async () => {
  const FILTERS_MAP: Record<FiltersEnum, (props) => PIXI.Filter> = {
    [FiltersEnum.OLD_FILM]: ({ seed, ...props }: OldFilmFilterType) =>
      new OldFilmFilter(props, seed),
    [FiltersEnum.RGB_SPLIT]: ({ r, g, b }: RGBSplitFilterType) =>
      new RgbSplitFilter(r, g, b),
  };

  const onAddOrUpdate = async (entityId: number) => {
    const entity = Library.engine.getEntity(entityId);
    const { filters } = entity.getComponent(Component.DISPLAY_OBJECT_FILTERS);

    const displayObject = Utils.render.getContainer(entityId);
    displayObject.filters = filters.map(({ type, ...props }) =>
      FILTERS_MAP[type](props)
    );
  };

  const onAdd = onAddOrUpdate;

  const onUpdate = async (entityId: number, component: Component) => {
    if (component === Component.DISPLAY_OBJECT_FILTERS) {
      await onAddOrUpdate(entityId);
    }
  };

  return {
    components: [Component.DISPLAY_OBJECT, Component.DISPLAY_OBJECT_FILTERS],
    onAdd,
    onUpdate,
  };
};
