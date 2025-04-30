import { useEffect, useState } from "react";
import { getCategories } from "../services";
import { CategoriesType } from "../types";

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoriesType>([]);

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories };
};
