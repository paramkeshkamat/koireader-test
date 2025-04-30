import { IProduct } from "../../types";
import ProductCard from "../product-card";
import { Typography } from "antd";
import { ProductGridWrapper } from "../../styled";

type ProductGridProps = {
  products: IProduct[];
};

export default function ProductsGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <center>
        <Typography.Text type="secondary">No Results!</Typography.Text>
      </center>
    );
  }

  return (
    <ProductGridWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductGridWrapper>
  );
}
