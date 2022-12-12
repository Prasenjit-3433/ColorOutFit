import { createSelector } from "reselect";
import { RootState } from '../store';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

// categoriesReducer's state
const selectCategoriesReducerState = (state: RootState): CategoriesState => {
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
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap)}
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducerState],
  (categoriesReducerState) => categoriesReducerState.isLoading
);