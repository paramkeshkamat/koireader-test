import {
  API_BASEURL,
  CATEGORIES_API_ENDPOINT,
  PRODUCT_API_ENDPOINT,
} from "../constants";
import { CategoriesType, IProduct } from "../types";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(API_BASEURL + PRODUCT_API_ENDPOINT);
  const data = await response.json();
  return data;
};

export const getCategories = async (): Promise<CategoriesType> => {
  const response = await fetch(API_BASEURL + CATEGORIES_API_ENDPOINT);
  const data = await response.json();
  return data;
};
