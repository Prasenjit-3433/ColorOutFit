import { createSelector } from "reselect";

// categoriesReducer's state
const selectCategoriesReducerState = (state) => {
  return state.categories};

// gives categories array
export const selectCategories = createSelector(
  [selectCategoriesReducerState],
  (categoriesReducerState) => {
    return categoriesReducerState.categories}
);

// gives categoriesMap
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})}
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducerState],
  (categoriesReducerState) => categoriesReducerState.isLoading
);