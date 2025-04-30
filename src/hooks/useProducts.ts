import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../services";
import { IProduct } from "../types";

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 0]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory([]);
    setSelectedRating(0);
    setSelectedPriceRange([0, 0]);
  };

  const products = useMemo(() => {
    // search filter
    const searchFilter = allProducts.filter((product) =>
      product.title
        .toLowerCase()
        .trim()
        .includes(searchQuery.toLowerCase().trim())
    );

    // category filter
    let categoryFilter = searchFilter;
    if (selectedCategory.length > 0) {
      categoryFilter = searchFilter.filter((product) =>
        selectedCategory.includes(product.category)
      );
    }

    // price range filter
    let pricesFilter = categoryFilter;
    if (selectedPriceRange[1] > 0) {
      pricesFilter = categoryFilter.filter(
        (product) =>
          product.price > selectedPriceRange[0] &&
          product.price < selectedPriceRange[1]
      );
    }

    // rating filter
    let ratingFilter = pricesFilter;
    if (selectedRating > 0) {
      ratingFilter = pricesFilter.filter(
        (product) => Math.floor(product.rating.rate) === selectedRating
      );
    }

    return ratingFilter;
  }, [
    allProducts,
    searchQuery,
    selectedCategory,
    selectedPriceRange,
    selectedRating,
  ]);

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts();
      setAllProducts(productsData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    loading,
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedRating,
    setSelectedRating,
    selectedPriceRange,
    setSelectedPriceRange,
    resetFilters,
  };
};
