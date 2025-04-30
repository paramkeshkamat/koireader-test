import { Button, Card, Typography } from "antd";
import { IProduct } from "../../types";
import { CardImage, Rating } from "../index";
import {
  PRODUCT_DESC_MAX_LENGTH,
  PRODUCT_TITLE_MAX_LENGTH,
} from "../../constants";
import { Chip } from "../../styled";

type ProductCardProps = IProduct;

export default function ProductCard(props: ProductCardProps) {
  const title =
    props.title.length > PRODUCT_TITLE_MAX_LENGTH
      ? `${props.title.slice(0, PRODUCT_TITLE_MAX_LENGTH)}...`
      : props.title;

  const description =
    props.description.length > PRODUCT_DESC_MAX_LENGTH
      ? `${props.description.slice(0, PRODUCT_DESC_MAX_LENGTH)}...`
      : props.description;

  return (
    <Card>
      <CardImage src={props.image} alt={props.title} />
      <Typography.Title level={4}>{title}</Typography.Title>
      <Rating rate={props.rating.rate} count={props.rating.count} />
      <Chip>{props.category}</Chip>
      <br />
      <Typography.Text type="secondary">{description}</Typography.Text>
      <Typography.Title level={4}>${props.price}</Typography.Title>
      <div style={{ display: "flex" }}>
        <Button type="primary" block>
          Buy Now
        </Button>
        <Button type="text" block>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
