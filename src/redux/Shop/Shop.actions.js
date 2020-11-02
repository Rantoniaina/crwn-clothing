import ShopActionsTypes from "./Shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
