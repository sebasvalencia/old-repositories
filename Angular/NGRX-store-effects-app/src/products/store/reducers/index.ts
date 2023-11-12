//contiene todos los reducers

import { ActionReducerMap, createSelector, createFeatureSelector } from "@ngrx/store";

import * as fromPizzas from "./pizzas.reducer";

//la referencia a la interfaz
export interface ProductsState{
    pizzas: fromPizzas.PizzaState
}

//Enlazando nuestro reducers con el reducer, describe como se ve el reducer por el ActionReducerMap
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

//crear base level 
export const getProductsState = createFeatureSelector<ProductsState>('products');

//pizzas state
export const getPizzaState = createSelector(getProductsState, (state:ProductsState) => state.pizzas);

//Get pizzas
export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
