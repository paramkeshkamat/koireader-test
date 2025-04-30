import { useProducts } from "./hooks";
import {
  CategoriesFilter,
  PricesFilter,
  ProductsGrid,
  RatingFilter,
  ResetFilter,
  Searchbar,
} from "./components";
import { Divider, Spin } from "antd";
import { FilterWrapper, ProductsWrapper, Wrapper } from "./styled";

export default function App() {
  const {
    loading,
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedRating,
    setSelectedRating,
    resetFilters,
    selectedPriceRange,
    setSelectedPriceRange,
  } = useProducts();

  return (
    <Wrapper>
      <FilterWrapper>
        <CategoriesFilter
          selectedCategory={selectedCategory}
          onCategoryChange={(val) => setSelectedCategory(val)}
        />
        <Divider />
        <PricesFilter
          selectedPriceRange={selectedPriceRange}
          onChange={(val) => setSelectedPriceRange(val)}
        />
        <Divider />
        <RatingFilter
          selectedRating={selectedRating}
          onChange={(val) => setSelectedRating(val)}
        />
        <Divider />
        <ResetFilter onClick={resetFilters} />
      </FilterWrapper>
      <ProductsWrapper>
        <Searchbar
          searchQuery={searchQuery}
          onQueryChange={(val) => setSearchQuery(val)}
        />
        {loading ? (
          <center>
            <Spin />
          </center>
        ) : (
          <ProductsGrid products={products} />
        )}
      </ProductsWrapper>
    </Wrapper>
  );
}
