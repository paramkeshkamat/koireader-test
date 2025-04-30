import { Rate, Typography } from "antd";

type RatingProps = {
  rate: number;
  count: number;
};

export default function Rating({ rate, count }: RatingProps) {
  return (
    <div>
      <Rate value={rate} disabled />
      &nbsp;
      <Typography.Text>({count})</Typography.Text>
    </div>
  );
}
